import React from "react"
import {useSelector} from "react-redux"
import Task from './Task';
import {Droppable} from 'react-beautiful-dnd';

const Tasks = (props) => {
  const {taskIds, listId} = props
  const tasks = useSelector((state) => state.tasks.value)

  const showTasks = taskIds.length > 0 && taskIds.map(function (taskId, index) {
    return (<Task task={tasks[taskId]} key={taskId} index={index}/>)
  })

  return (
    <Droppable droppableId={listId}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {showTasks}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Tasks
