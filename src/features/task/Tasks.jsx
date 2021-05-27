import React from "react"
import {useSelector} from "react-redux"
import Task from './Task';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const TaskList = styled.div `
  background-color: ${props => (props.isDraggingOver
  ? 'skyblue'
  : 'white')};
  margin: 0 -8px -8px;
  padding: 8px;
  transition: background-color 0.2s ease;
  flex-grow: 1;
`;
const Tasks = (props) => {
  const {taskIds, listId} = props
  const tasks = useSelector((state) => state.tasks.value)

  const showTasks = taskIds.length > 0 && taskIds.map(function (taskId, index) {
    return (<Task task={tasks[taskId]} key={taskId} index={index}/>)
  })

  return (
    <Droppable droppableId={listId} type="task">
      {(provided, snapshot) => (
        <TaskList
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}>
          {showTasks}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  )
}

export default Tasks
