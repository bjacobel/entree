import { createContext, useContext } from 'react';
import { type SupabaseClient } from '@supabase/supabase-js';

const Supabase = createContext<SupabaseClient | null>(null);
export default Supabase;

export const useSupabase = () => useContext(Supabase);
