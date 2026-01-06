import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import {
  addTask as addTaskAction,
  toggleTask as toggleTaskAction,
  reorderTasks as reorderTasksAction,
  setFilter as setFilterAction,
} from '../model/task.slice';
import type { Task, TaskFilter, TaskId } from '../model/task.types';
import type { RootState } from '../../../app/store/store';

/* Encapsulates all Redux logic */
export function useTasks() {
  const dispatch = useAppDispatch();
  
  const tasks = useAppSelector((state : RootState) => state.tasks.items);
  const filter = useAppSelector((state : RootState) => state.tasks.filter);

  // Filtered tasks derived state
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((t:Task) => t.completed);
      case 'active':
        return tasks.filter((t:Task) => !t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Action dispatchers
  const addTask = (task: Task) => dispatch(addTaskAction(task));
  const toggleTask = (taskId: TaskId) => {
    dispatch(toggleTaskAction(taskId));
  }
  const reorderTasks = (newTasks: Task[]) => dispatch(reorderTasksAction(newTasks));
  const setFilter = (newFilter: TaskFilter) => dispatch(setFilterAction(newFilter));

  return {
    tasks: filteredTasks,
    filter,
    addTask,
    toggleTask,
    reorderTasks,
    setFilter,
  };
}