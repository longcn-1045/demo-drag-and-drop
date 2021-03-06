import React from "react"
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div `
  margin: 8px 0;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  background-color: ${props => (props.isDragging
  ? 'lightgreen'
  : 'inherit')};
  display: flex;
  align-item: center;
`;

const Handle = styled.div `
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

const Task = (props) => {
  const {task, index} = props

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}>
          <Handle/> {task.content}
        </Container>
      )}
    </Draggable>
  )
}

export default Task
