import React from "react"
import {useSelector} from "react-redux"
import Task from './Task';

const Tasks = (props) => {
  const {taskIds} = props
  const tasks = useSelector((state) => state.tasks.value)

  const showTasks = taskIds.length > 0 && taskIds.map(function (taskId, index) {
    return (<Task task={tasks[taskId]} key={index}/>)
  })

  return (
    <div>
      {showTasks}
    </div>
  )
}

export default Tasks
