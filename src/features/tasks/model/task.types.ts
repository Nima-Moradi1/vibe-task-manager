/* Domain-level unique identifier(uuid, nanoid, backend id) */
export type TaskId = string;

/* Core Task entity */
export interface Task {
  id: TaskId;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

/* Task list filtering options */
export type TaskFilter = 'all' | 'active' | 'completed';