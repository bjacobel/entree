import { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useLocation } from 'wouter';

import { useSupabase } from '../../contexts/Supabase';
import useSupabaseSession from '../../hooks/useSupabaseSession';
import Loading from '../Loading';

export default () => {
  const supabase = useSupabase();
  const { loading, session } = useSupabaseSession();
  const [__location, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && session) {
      setLocation('/box');
    }
  }, [session, loading, setLocation]);

  if (!supabase || loading) return <Loading />;

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />;
};
