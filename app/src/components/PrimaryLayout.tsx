import { ReactNode } from 'react';
import { css } from '@linaria/core';
import { AppShell } from '@mantine/core';
import { Link } from 'wouter';

import Avatar from './Avatar';

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const unstyledLink = css`
  text-decoration: none;
  color: black;
`;

const PrimaryLayout = ({ children }: { children: ReactNode }) => (
  <AppShell header={{ height: 60 }} padding="md">
    <AppShell.Header className={header}>
      <h1>
        <Link href="/box" className={unstyledLink}>
          Entrée
        </Link>
      </h1>
      <Avatar />
    </AppShell.Header>
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);

export default PrimaryLayout;
