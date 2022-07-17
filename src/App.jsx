import React, { useState, useEffect } from 'react'
import './App.css'
import Container from './components/Container'
import TaskCreator from './components/TaskCreator'
import TaskTable from './components/TasksTable'
import VisibilityControl from './components/VisibilityControl'

function App () {
  const [tasksItems, setTasksItems] = useState([])
  const [completed, setCompleted] = useState(false)

  const createTask = (taskName) => {
    console.log(taskName)
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  // TODO: esto se puede hacer con context para evitar el prop drilling?
  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    )
  }

  const cleanTask = () => {
    setTasksItems(tasksItems.filter((task) => !task.done))
    setCompleted(false)
  }

  useEffect(() => {
    console.log('carga inicial componente')
    const tareasStorage = localStorage.getItem('tasks')
    if (tareasStorage) {
      console.log('se cargaron tareas del local')
      setTasksItems(JSON.parse(tareasStorage))
    }
  }, [])

  useEffect(() => {
    console.log('cambio la lista de tareas')
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
        <Container>
          <TaskCreator createTask={createTask} />
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
          <VisibilityControl
            setShowCompleted={(checked) => setCompleted(checked)}
            cleanTask={cleanTask}
            isChecked={completed}
          />
          {completed && (
            <TaskTable
              tasks={tasksItems}
              toggleTask={toggleTask}
              showCompleted={completed}
            />
          )}
        </Container>
    </main>
  )
}

export default App
