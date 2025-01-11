import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rrreibacgzycartctvrb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycmVpYmFjZ3p5Y2FydGN0dnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1OTIyMzcsImV4cCI6MjA1MjE2ODIzN30.dJvakl-hnNnFExA2c3B68_kgUSYCMSXbjkh4k3h4kkY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
