import React from 'react'

const VisibilityControl = ({ isChecked, setShowCompleted, cleanTask }) => {
  const handleDelete = () => {
    if (confirm('Desea eliminar las tareas completadas?')) {
      cleanTask()
    }
  }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
      <div className="form-check form-switch">
        <label>Show tasks completed</label>
        <input
          className='form-check-input'
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
      </div>
      <button className='btn btn-danger btn-sm' onClick={handleDelete}>Clear completed</button>
    </div>
  )
}

export default VisibilityControl
