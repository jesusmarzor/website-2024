import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = "https://" + process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_SECRET_ROLE ?? ""

export default createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    }
})