import { ReactNode, useEffect } from 'react';
import { useLocation } from 'wouter';

import useSupabaseSession from '../../hooks/useSupabaseSession';
import Loading from '../Loading';

export default ({ children }: { children: ReactNode }) => {
  const { loading, session } = useSupabaseSession();
  const [__location, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && !session) {
      setLocation('/login');
    }
  }, [session, loading, setLocation]);

  if (loading) return <Loading />;

  return children;
};
