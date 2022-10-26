/*
const tasks = [
  {
    id: 1,
    text: 'Front-End Development',
    day: 'Jan 1st at 12:00pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Back-End Development',
    day: 'Jan 2nd at 11:00pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Full-Stack Development',
    day: 'Jan 3rd at 10:00pm',
    reminder: false,
  },
  {
    id: 4,
    text: 'Random Note',
    day: 'Feb 1st at 9:00am',
    reminder: true,
  },
]
*/

// Move to App.js global
//import { useState } from 'react'
// const Tasks = ... const [tasks, setTasks]

import Task from './Task'

// Add To App.js To View
/*
const Tasks = ({ tasks }) => {
  const [tasks, setTasks]
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}
*/
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
    </>
  )
}

export default Tasks
