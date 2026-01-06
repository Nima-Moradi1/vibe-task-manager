import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type { Task, TaskFilter } from './task.types';

// initial tasks from localStorage
const savedTasks = localStorage.getItem('tasks');
const savedFilter = localStorage.getItem('taskFilter') as TaskFilter | null;

const initialState: { items: Task[]; filter: TaskFilter } = {
  items: savedTasks ? JSON.parse(savedTasks) : [],
  filter: savedFilter ?? 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.items.unshift(action.payload);
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.items.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    reorderTasks(state, action: PayloadAction<Task[]>) {
      state.items = action.payload;
    },
    setFilter(state, action: PayloadAction<TaskFilter>) {
      state.filter = action.payload;
    },
  },
});


export const { addTask, toggleTask, reorderTasks, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;