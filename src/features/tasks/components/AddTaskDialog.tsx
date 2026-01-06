import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { AppButton } from '../../../shared/components/ui/AppButton';
import { AppTextField } from '../../../shared/components/ui/AppTextField';
import { useTasks } from '../hooks/useTasks';
import { generateId } from '../../../shared/utils/generateId';

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
}

export function AddTaskDialog({ open, onClose }: AddTaskDialogProps) {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ id: generateId(), title, description, completed: false, createdAt: Date.now() });
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <AppTextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <AppTextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          multiline
          rows={3}
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <AppButton onClick={onClose} color="secondary">Cancel</AppButton>
        <AppButton onClick={handleAdd}>Add</AppButton>
      </DialogActions>
    </Dialog>
  );
}