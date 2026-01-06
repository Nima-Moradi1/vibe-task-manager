import { useState } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TaskList } from '../features/tasks/components/TaskList';
import { TaskFilters } from '../features/tasks/components/TaskFilters';
import { AddTaskDialog } from '../features/tasks/components/AddTaskDialog';
import { PageContainer } from '../shared/components/layout/PageContainer';
import { ThemeToggle } from '../shared/components/ui/ThemeToggle';

export default function TasksPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <PageContainer>
      <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
              <ThemeToggle />
        <Typography variant="h2">Task Manager</Typography>
        <Fab color="primary" size="medium" onClick={() => setIsDialogOpen(true)}>
          <AddIcon />
        </Fab>
      </Box>
      <TaskFilters />
      <TaskList />
      <AddTaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </PageContainer>
  );
}