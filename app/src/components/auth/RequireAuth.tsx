import { ReactNode, useEffect } from 'react';
import { useLocation, useSearch } from 'wouter';

import useSupabaseSession from '../../hooks/useSupabaseSession';
import Loading from '../Loading';

export default ({ children }: { children: ReactNode }) => {
  const { loading, session } = useSupabaseSession();
  const [location, setLocation] = useLocation();
  const search = useSearch();

  useEffect(() => {
    if (!loading && !session) {
      setLocation(`/login?next=${encodeURIComponent(`${location}${search ? `?${search}` : ''}`)}`);
    }
  }, [session, loading, search, location, setLocation]);

  if (loading) return <Loading />;

  return children;
};
