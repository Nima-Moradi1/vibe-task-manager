import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import type { PaletteMode } from '@mui/material/styles';

/* Central MUI theme */
export const theme = (mode : PaletteMode) => createTheme({
  palette : palette(mode),
  typography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 2,
      },
    },
  },
});