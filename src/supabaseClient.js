import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvmleblcfrjznxswiokz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bWxlYmxjZnJqem54c3dpb2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzMzMDcsImV4cCI6MjA4NjUwOTMwN30.ElMxJUeFeouKXlFgjLfAioV6zTM5Ye9QxpE6j0904bY'

export const supabase = createClient(supabaseUrl, supabaseKey)