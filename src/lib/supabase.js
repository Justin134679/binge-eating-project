import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vznhhyqkwdzlkvnbofij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bmhoeXFrd2R6bGt2bmJvZmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzY4MjgsImV4cCI6MjA2MDgxMjgyOH0.3LZ8Xgfkgwl5Qg2SZVjUdlC8Ts6kwk-diaKajhnZDa0';

export const supabase = createClient(supabaseUrl, supabaseKey);
