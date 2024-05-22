import { createTheme, MantineProvider } from '@mantine/core';
import React from 'react';

const theme = createTheme({});

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}