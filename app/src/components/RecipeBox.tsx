import { styled } from '@linaria/react';

import { center, openSans } from '../stylesheets/shared.css';
import { lightgrey } from '../stylesheets/colors.css';
import StyledLink from './StyledLink';

const Header = styled.h3`
  ${center}
  ${openSans}
  ${lightgrey}
  font-style: italic;
`;

export default () => (
  <div>
    <Header>Welcome to your recipe box</Header>
    <StyledLink to="/">Home</StyledLink>
  </div>
);
