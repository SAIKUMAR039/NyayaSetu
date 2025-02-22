import { supabase } from './supabase';

export async function logActivity(
  activityType: string,
  activityData: Record<string, unknown>
) {
  const { error } = await supabase.from('user_activities').insert([
    {
      activity_type: activityType,
      activity_data: activityData,
    },
  ]);

  if (error) throw error;
}

export async function getUserActivities(limit = 10) {
  const { data, error } = await supabase
    .from('user_activities')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}