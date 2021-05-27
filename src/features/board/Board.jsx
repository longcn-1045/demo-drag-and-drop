import React from "react"
import Lists from "./../list/Lists"
import {useSelector,useDispatch} from "react-redux"
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';
import {updateList} from './../list/listSlice';

const Title = styled.h1 `
  text-align: center;
`;

const Board = (props) => {
  const {board} = props
  const lists = useSelector((state) => state.lists.value)

  const dispatch = useDispatch()

  const onDragEnd = result => {
    const {destination, source, draggableId} = result

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const list = lists[source.droppableId]
    const newTaskIds = Array.from(list.taskIds)

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newList = {
      ...list,
      taskIds: newTaskIds
    }

    dispatch(updateList(newList))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Title>{board.name}</Title>
      <Lists listIds={board.listIds}/>
    </DragDropContext>
  )
}

export default Board
