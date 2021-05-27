import React from "react"
import {useSelector} from "react-redux"
import List from './List';
import {Droppable} from 'react-beautiful-dnd';

const Lists = (props) => {
  const {listIds, boardId} = props
  const lists = useSelector((state) => state.lists.value)

  const showLists = listIds.length > 0 && listIds.map(function (listId, index) {
    return (<List list={lists[listId]} key={listId} index={index}/>)
  })

  return (
    <Droppable droppableId={boardId} direction="horizontal" type="list">
      {provided => (
        <div
          style={{
          display: "flex",
          alignItem: "center"
        }}
          {...provided.droppableProps}
          ref={provided.innerRef}>
          {showLists}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Lists
