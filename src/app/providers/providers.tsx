import type { PropsWithChildren } from 'react';
import { useMemo, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { store } from '../store/store';
import { theme } from '../../shared/theme/theme';
import { ColorModeContext, type ColorMode } from './colorModeProvider';

const COLOR_MODE_KEY = 'color-mode';

/**
 global application providers
 scalable provider pattern (redux, theme, router, etc.)
 */
export function AppProviders({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem(COLOR_MODE_KEY);
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  });

  const toggleColorMode = () => {
    setMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem(COLOR_MODE_KEY, next);
      return next;
    });
  };

  const appTheme = useMemo(() => theme(mode), [mode]);

  return (
    <ReduxProvider store={store}>
      <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ReduxProvider>
  );
}