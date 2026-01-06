import { EmptyState } from '../../../shared/components/ui/EmptyState';
import { TaskCard } from './TaskCard';
import { SortableItem } from './SortableItem';
import { useTasks } from '../hooks/useTasks';
import { DndContext, closestCenter } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';

export function TaskList() {
  const { tasks, toggleTask, reorderTasks } = useTasks();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex(t => t.id === active.id);
    const newIndex = tasks.findIndex(t => t.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    reorderTasks(arrayMove(tasks, oldIndex, newIndex));
  };

  if (!tasks.length) return <EmptyState message="No tasks yet. Add your first task!" />;

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
        {tasks.map(task => (
          <SortableItem key={task.id} id={task.id}>
            <TaskCard task={task} onToggle={toggleTask} />
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
}