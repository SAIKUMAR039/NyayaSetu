import { supabase } from './supabase';
import { create } from 'zustand';

interface AuthState {
  user: null | {
    id: string;
    email: string;
    role: string;
  };
  profile: null | {
    username: string;
    fullName: string;
    preferredLanguage: string;
    persona: string;
  };
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loadProfile: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  profile: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  },
  signUp: async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, profile: null });
  },
  loadProfile: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      set({ user: null, profile: null, loading: false });
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    set({
      user: {
        id: user.id,
        email: user.email!,
        role: user.role!,
      },
      profile: profile ? {
        username: profile.username,
        fullName: profile.full_name,
        preferredLanguage: profile.preferred_language,
        persona: profile.persona,
      } : null,
      loading: false,
    });
  },
}));