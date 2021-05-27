import React from "react"
import {useSelector} from "react-redux"
import List from './List';

const Lists = (props) => {
  const {listIds} = props
  const lists = useSelector((state) => state.lists.value)

  const showLists = listIds.length > 0 && listIds.map(function (listId, index) {
    return (<List list={lists[listId]} key={index}/>)
  })

  return (
    <div>
      {showLists}
    </div>
  )
}

export default Lists
