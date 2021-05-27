import React from "react"
import Lists from "./../list/Lists"
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';

const Title = styled.h1 `
  text-align: center;
`;

const Board = (props) => {
  const {board} = props

  const onDragEnd = result => {
    console.log(result)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Title>{board.name}</Title>
      <Lists listIds={board.listIds}/>
    </DragDropContext>
  )
}

export default Board
