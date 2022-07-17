import React from 'react'
import TaskItem from './TaskItem'

export default function TaskTable ({
  tasks,
  toggleTask,
  showCompleted = false
}) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskItem key={task.name} task={task} toggleTask={toggleTask} />
      ))
  }

  return (
    <table className='table table-dark table-striped tabler-bordered border-seocndary'>
      <thead>
        <tr className='table-primary'>
          <th> Tasks </th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  )
}
