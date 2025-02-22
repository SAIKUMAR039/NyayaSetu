import { supabase } from './supabase';
import { z } from 'zod';

const documentSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()),
  metadata: z.record(z.unknown()),
});

export async function fetchDocuments(category?: string, language = 'en') {
  const query = supabase
    .from('legal_documents')
    .select(`
      *,
      document_translations!inner (
        title,
        content
      )
    `)
    .eq('status', 'published')
    .eq('document_translations.language', language);

  if (category) {
    query.eq('category', category);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function createDocument(input: z.infer<typeof documentSchema>) {
  const { data, error } = await supabase
    .from('legal_documents')
    .insert([input])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function translateDocument(
  documentId: string,
  language: string,
  title: string,
  content: string
) {
  const { data, error } = await supabase
    .from('document_translations')
    .insert([
      {
        document_id: documentId,
        language,
        title,
        content,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}