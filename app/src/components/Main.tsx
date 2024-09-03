import { Redirect } from 'wouter';

import StyledLink from './StyledLink';
import useSupabaseSession from '../hooks/useSupabaseSession';

export default () => {
  const { session } = useSupabaseSession();

  if (session) return <Redirect to="/box" />;

  return <StyledLink to="/box">Login</StyledLink>;
};
