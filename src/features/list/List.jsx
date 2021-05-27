import React from "react"
import Tasks from './../task/Tasks';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div `
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  min-width: 290px;
  width: 290px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const List = (props) => {
  const {list, index} = props

  return (
    <Draggable draggableId={list.id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <h3 {...provided.dragHandleProps}>{list.title}</h3>
          <Tasks taskIds={list.taskIds} listId={list.id}/>
        </Container>
      )}
    </Draggable>
  )
}

export default List
