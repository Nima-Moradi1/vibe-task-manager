import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useColorMode } from '../../../app/providers/colorModeProvider';

export function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Tooltip title="Toggle theme">
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'dark' ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
}