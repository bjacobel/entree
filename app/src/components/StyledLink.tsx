import { ReactNode } from 'react';
import { styled } from '@linaria/react';
import { Link } from 'wouter';

import { center } from '../stylesheets/shared.css';

// Not 100% sure why I can't just pass Link to styled()
const Intermediate = ({ className, to, children }: { className?: string; to: string; children: ReactNode }) => (
  <Link className={className} href={to}>
    {children}
  </Link>
);

export default styled(Intermediate)`
  ${center}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
