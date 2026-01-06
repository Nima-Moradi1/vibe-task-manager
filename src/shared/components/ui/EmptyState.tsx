import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
      textAlign="center"
      p={2}
    >
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}