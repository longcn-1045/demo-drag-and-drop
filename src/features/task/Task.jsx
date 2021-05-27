import React from "react"
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div `
  margin: 8px 0;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  background-color: white;
`;

const Task = (props) => {
  const {task, index} = props

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  )
}

export default Task
