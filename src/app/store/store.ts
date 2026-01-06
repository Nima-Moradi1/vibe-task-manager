import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../../features/tasks/model/task.slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: import.meta.env.DEV,
});

/* ---------- PERSISTENCE LOGIC ---------- */
let saveTimeout: number | undefined;

store.subscribe(() => {
  const { items, filter } = store.getState().tasks;
  clearTimeout(saveTimeout);
  saveTimeout = window.setTimeout(() => {
    localStorage.setItem('tasks', JSON.stringify(items));
    localStorage.setItem('taskFilter', filter);
  }, 200);
});

/* ---------- TYPES ---------- */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
