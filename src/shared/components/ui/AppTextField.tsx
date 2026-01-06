import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

export function AppTextField(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      size="small"
      margin="dense"
      variant="outlined"
      {...props}
    />
  );
}