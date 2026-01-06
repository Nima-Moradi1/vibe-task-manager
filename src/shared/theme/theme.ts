import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

/* Central MUI theme */
export const theme = createTheme({
  palette,
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