import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setBoards} from "./boardSlice"
import {setLists} from "./../list/listSlice"
import {setTasks} from "./../task/taskSlice"
import Board from "./Board"

const Boards = (props) => {
  const {initialData} = props
  const boards = useSelector((state) => state.boards.value)
  const dispatch = useDispatch()

  useEffect(() => {
    setData()
  }, [])

  const setData = () => {
    dispatch(setTasks(initialData.tasks))
    dispatch(setLists(initialData.lists))
    dispatch(setBoards(initialData.boards))
  }

  const showBoads = Object
    .keys(boards)
    .length > 0 && Object
    .keys(boards)
    .map(function (key, index) {
      return (<Board board={boards[key]} key={index}/>)
    })

  return (
    <div>
      {showBoads}
    </div>
  )
}

export default Boards
