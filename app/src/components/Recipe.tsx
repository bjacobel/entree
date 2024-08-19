import { styled } from '@linaria/react';
import { useParams } from 'wouter';

import { center, openSans } from '../stylesheets/shared.css';
import { lightgrey } from '../stylesheets/colors.css';
import StyledLink from './StyledLink';

const Header = styled.h3`
  ${center}
  ${openSans}
  ${lightgrey}
  font-style: italic;
`;

export default () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Header>{`recipe: ${id}`}</Header>
      <StyledLink to="/">Home</StyledLink>
    </div>
  );
};
