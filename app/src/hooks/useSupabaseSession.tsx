import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

import { useSupabase } from '../contexts/Supabase';

export default () => {
  const supabase = useSupabase();
  const [loading, setLoading] = useState(true);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);

  useEffect(() => {
    if (!supabase) return undefined;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setLoading(false);
      setCurrentSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentSession(session);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return { session: currentSession, loading };
};
