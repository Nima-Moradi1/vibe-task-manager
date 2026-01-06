import type { PaletteMode } from '@mui/material';

/* Centralized color palette (light & dark) */
export const palette = (mode: PaletteMode) => ({
  mode,

  primary: {
    main: mode === 'dark' ? '#A29BFE' : '#6C5CE7',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: mode === 'dark' ? '#81ECEC' : '#00CEC9',
    contrastText: '#FFFFFF',
  },

  background: {
    default: mode === 'dark' ? '#0F172A' : '#F8F9FC',
    paper: mode === 'dark' ? '#111827' : '#FFFFFF',
  },

  text: {
    primary: mode === 'dark' ? '#E5E7EB' : '#1E1E1E',
    secondary: mode === 'dark' ? '#9CA3AF' : '#555555',
  },

  error: {
    main: '#E74C3C',
  },
});