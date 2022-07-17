import React, { useState } from 'react'

const TaskCreator = ({ createTask }) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task)
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className="col-9">
      <input
        className='form-control'
        type="text"
        placeholder="Enter a new task"
        onChange={ e => setTask(e.target.value)}
        value={task}
      />
      </div>
      <div className="col-3">
      <button className='btn btn-primary btn-sm'>Save task</button>
      </div>
    </form>
  )
}

export default TaskCreator
