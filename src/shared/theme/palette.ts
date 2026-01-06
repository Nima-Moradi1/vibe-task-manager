/* Centralized color palette */
import type { PaletteMode } from '@mui/material';

export const palette: {
  mode: PaletteMode;
  primary: { main: string; contrastText: string };
  secondary: { main: string; contrastText: string };
  background: { default: string; paper: string };
  text: { primary: string; secondary: string };
  error: { main: string };
} = {
  mode: 'light',
  primary: {
    main: '#6C5CE7',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#00CEC9',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#F8F9FC',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#1E1E1E',
    secondary: '#555555',
  },
  error: {
    main: '#E74C3C',
  },
};