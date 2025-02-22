/*
  # Initial Schema Setup for NyayaSetu

  1. New Tables
    - `profiles`
      - User profile information
      - Linked to auth.users
      - Stores preferences and settings
    
    - `legal_documents`
      - Legal document metadata and content
      - Versioning support
      - Multi-language capabilities
    
    - `document_translations`
      - Translations for legal documents
      - Quality assurance tracking
      - Review status management
    
    - `user_activities`
      - User interaction tracking
      - Document access history
      - Search and view logs

  2. Security
    - RLS policies for all tables
    - Role-based access control
    - Document access restrictions

  3. Indexes
    - Optimized queries for document search
    - Fast profile lookups
    - Efficient translation retrieval
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  preferred_language TEXT DEFAULT 'en',
  persona TEXT CHECK (persona IN ('student', 'worker', 'women', 'senior')),
  notification_preferences JSONB DEFAULT '{"email": true, "push": false}'::jsonb,
  gamification_data JSONB DEFAULT '{"points": 0, "level": 1, "badges": []}'::jsonb
);

-- Legal documents table
CREATE TABLE legal_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  metadata JSONB DEFAULT '{}',
  version INTEGER DEFAULT 1,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  source_language TEXT DEFAULT 'en',
  created_by UUID REFERENCES auth.users(id)
);

-- Document translations table
CREATE TABLE document_translations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  document_id UUID REFERENCES legal_documents(id) ON DELETE CASCADE,
  language TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'published')),
  translated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES auth.users(id),
  metadata JSONB DEFAULT '{}'
);

-- User activities table
CREATE TABLE user_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  activity_type TEXT NOT NULL,
  activity_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  ip_address TEXT,
  user_agent TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_legal_documents_category ON legal_documents(category);
CREATE INDEX idx_legal_documents_tags ON legal_documents USING GIN(tags);
CREATE INDEX idx_document_translations_document_language ON document_translations(document_id, language);
CREATE INDEX idx_user_activities_user_timestamp ON user_activities(user_id, created_at DESC);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE legal_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activities ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Profiles: Users can read their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Profiles: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Legal Documents: Anyone can read published documents
CREATE POLICY "Anyone can read published documents"
  ON legal_documents FOR SELECT
  TO authenticated
  USING (status = 'published');

-- Legal Documents: Only admins can create/update documents
CREATE POLICY "Admins can manage documents"
  ON legal_documents FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.role = 'admin'
    )
  );

-- Document Translations: Anyone can read published translations
CREATE POLICY "Anyone can read published translations"
  ON document_translations FOR SELECT
  TO authenticated
  USING (status = 'published');

-- User Activities: Users can only see their own activities
CREATE POLICY "Users can view own activities"
  ON user_activities FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Functions for managing document versions
CREATE OR REPLACE FUNCTION increment_document_version()
RETURNS TRIGGER AS $$
BEGIN
  NEW.version = OLD.version + 1;
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER increment_version
  BEFORE UPDATE ON legal_documents
  FOR EACH ROW
  WHEN (OLD.content IS DISTINCT FROM NEW.content)
  EXECUTE FUNCTION increment_document_version();