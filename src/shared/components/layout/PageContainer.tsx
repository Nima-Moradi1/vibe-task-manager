import type { ReactNode } from 'react';
import { Container, Box } from '@mui/material';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Container maxWidth="md">
      <Box py={4}>{children}</Box>
    </Container>
  );
}