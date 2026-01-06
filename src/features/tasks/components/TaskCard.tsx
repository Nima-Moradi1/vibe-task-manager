import { Card, CardContent, Typography, Checkbox, Box, IconButton } from '@mui/material';
import { DragIndicator } from '@mui/icons-material';
import type { Task } from '../model/task.types';
import { memo } from 'react';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dragHandleProps?: any;
}

export const TaskCard = memo(function TaskCard({ task, onToggle, dragHandleProps }: TaskCardProps) {
  return (
    <Card
     sx={{
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: task.completed ? 'action.selected' : 'background.paper',
    opacity: task.completed ? 0.6 : 1,
    borderLeft: task.completed ? '4px solid #00CEC9' : '4px solid transparent', 
    transition: 'all 0.3s ease',
  }}
      elevation={1}
    >
      {/* Drag handle */}
      <IconButton {...dragHandleProps} sx={{ cursor: 'grab', mr: 1 }}>
        <DragIndicator />
      </IconButton>

      {/* Task content */}
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.description}
        </Typography>
      </CardContent>

      {/* Checkbox */}
      <Box pr={2}>
        <Checkbox
          checked={!!task.completed}
          onChange={() => {
            onToggle(task.id);
          }}
        />
      </Box>
    </Card>
  );
});