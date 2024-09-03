import { ReactNode } from 'react';
import { DEFAULT_THEME, MantineProvider, createTheme, mergeMantineTheme } from '@mantine/core';

import '@mantine/core/styles.css';

const themeOverride = createTheme({
  colors: {
    blue: [
      '#e8f6ff',
      '#d5e7fb',
      '#abccf0',
      '#7eb0e6',
      '#5998dd',
      '#4188d8',
      '#3281d8',
      '#236ec0',
      '#1762ac',
      '#00549a',
    ],
  },
  primaryColor: 'blue',
});
const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

const MantineThemeProvider = ({ children }: { children: ReactNode }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);

export default MantineThemeProvider;
