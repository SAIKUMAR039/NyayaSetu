export interface LegalResource {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  persona: 'student' | 'worker' | 'women' | 'senior';
  preferredLanguage: string;
  progress: {
    completedModules: string[];
    points: number;
    level: number;
  };
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: number;
  points: number;
  content: string;
}