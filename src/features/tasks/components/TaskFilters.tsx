import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { useTasks } from '../hooks/useTasks';

export function TaskFilters() {
  const { filter, setFilter } = useTasks();

  return (
    <Box mb={2}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(_, value) => value && setFilter(value)}
        size="small"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}