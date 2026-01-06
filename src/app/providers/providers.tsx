import type { PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { store } from '../store/store';
import { theme } from '../../shared/theme/theme'

/**
 global application providers -> I did this because
 this pattern scales well as more providers are added
 (router, queryClient, i18n, etc.)
 */
export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
}