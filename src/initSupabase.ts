import {SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY} from "@env"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});