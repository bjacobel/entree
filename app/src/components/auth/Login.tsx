import { useCallback, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useLocation, useSearch } from 'wouter';

import { useSupabase } from '../../contexts/Supabase';
import useSupabaseSession from '../../hooks/useSupabaseSession';
import Loading from '../Loading';
import PrimaryLayout from '../PrimaryLayout';
import { blue } from '../../stylesheets/colors.css';

export default () => {
  const supabase = useSupabase();
  const { loading, session } = useSupabaseSession();
  const [__location, setLocation] = useLocation();
  const search = useSearch();

  const getNextUrl = useCallback(() => {
    if (search) {
      const searchParams = new URLSearchParams(search);
      if (searchParams.has('next')) {
        return decodeURIComponent(searchParams.get('next')!);
      }
    }
    return '/box';
  }, [search]);

  useEffect(() => {
    if (!loading && session) {
      setLocation(getNextUrl());
    }
  }, [session, loading, setLocation, getNextUrl]);

  if (!supabase || loading) return <Loading />;

  return (
    <PrimaryLayout hideMenu>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: blue.color,
                brandAccent: blue.color,
              },
            },
          },
        }}
        providers={[]}
      />
    </PrimaryLayout>
  );
};
