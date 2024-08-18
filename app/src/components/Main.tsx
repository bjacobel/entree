import { styled } from '@linaria/react';

import StyledLink from './StyledLink';

const Logo = styled.div`
  height: 100px;
  background-image: url('../assets/images/logo.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

export default () => (
  <>
    <Logo role="banner" />
    <StyledLink to="/box">Login</StyledLink>
  </>
);
