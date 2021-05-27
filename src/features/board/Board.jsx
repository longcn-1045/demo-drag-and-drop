import React from "react"
import Lists from "./../list/Lists"
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';
import {updateList} from './../list/listSlice';
import {updateBoard} from './../board/boardSlice';

const Title = styled.h1 `
  text-align: center;
`;

const Board = (props) => {
  const {board} = props
  const lists = useSelector((state) => state.lists.value)

  const dispatch = useDispatch()

  const onDragEnd = result => {
    const {destination, source, draggableId, type} = result
    console.log(result)
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'list') {
      const newListIds = Array.from(board.listIds)
      newListIds.splice(source.index, 1)
      newListIds.splice(destination.index, 0, draggableId)

      const newBoard = {
        ...board,
        listIds: newListIds
      }

      dispatch(updateBoard(newBoard))
      return
    }

    const start = lists[source.droppableId]
    const finish = lists[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        taskIds: newTaskIds
      }

      dispatch(updateList(newList))
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    dispatch(updateList(newStart))
    dispatch(updateList(newFinish))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Title>{board.name}</Title>
      <Lists listIds={board.listIds} boardId={board.id}/>
    </DragDropContext>
  )
}

export default Board
