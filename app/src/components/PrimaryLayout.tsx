import { ReactNode } from 'react';
import { css } from '@linaria/core';
import { AppShell } from '@mantine/core';

import Avatar from './Avatar';

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

const PrimaryLayout = ({ children }: { children: ReactNode }) => (
  <AppShell header={{ height: 60 }} padding="md">
    <AppShell.Header className={header}>
      <h1>Entrée</h1>
      <Avatar />
    </AppShell.Header>
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);

export default PrimaryLayout;
