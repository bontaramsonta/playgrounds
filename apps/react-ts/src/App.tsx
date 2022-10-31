import { useEffect, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from '@components/SortableItem'

export default function App() {
  const [items, setItems] = useState([[1, 2, 3], [4, 5, 6]]);
  //!debug
  useEffect(() => console.log('[items changed]', items), [items])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className='flex space-x-4'>
        {items.map((item, i) => (
          <div key={i} className='flex flex-col space-y-4 p-2 bg-slate-100'>
            <SortableContext
              id={i.toString()}
              items={item}
              strategy={verticalListSortingStrategy}
            >
              {item.map(id => <SortableItem key={id} id={id} />)}
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  );

  function handleDragOver(event: any) {
    const { active, over } = event
    const sourceId = Number(active.data.current.sortable.index)
    const sourceContainer = Number(active.data.current.sortable.containerId)
    const destinationId = Number(over.data.current.sortable.index)
    const destinationContainer = Number(over.data.current.sortable.containerId)
    if (sourceContainer !== destinationContainer) {
      console.log('[handle drag over]', event)
      console.log({
        sourceId,
        sourceContainer,
        destinationId,
        destinationContainer
      })
      setItems(items => {
        let source = items[sourceContainer]
        let destination = items[destinationContainer]
        const data = source.splice(sourceId, 1)[0]
        destination.splice(destinationId, 0, data)
        console.log('[items]', items, data)
        return Array.from(items)
      })
    }
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;
    const sourceId = active.id
    const sourceContainer = Number(active.data.current.sortable.containerId)
    const destinationId = over.id
    const destinationContainer = Number(over.data.current.sortable.containerId)
    if (sourceContainer === destinationContainer) {
      console.log('[handle drag end]', event)
      console.log({
        sourceId,
        sourceContainer,
        destinationId,
        destinationContainer
      })
      if (active.id !== over.id) {
        console.log('[move within]')
        setItems((items) => {
          const oldIndex = items[sourceContainer].indexOf(sourceId);
          const newIndex = items[sourceContainer].indexOf(destinationId);
          items[sourceContainer] = arrayMove(items[sourceContainer], oldIndex, newIndex);
          return Array.from(items)
        });
      }
    }
  }
}