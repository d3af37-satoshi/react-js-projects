// [React.js] 
import { useState } from 'react';
// [Bootstrap] React
import Container from 'react-bootstrap/Container';
// [CUSTOM] Components
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// [Sass]STYLING • SCSS 
import './App.scss';

function App() {
  // (Show/Hide) Component State
  const [showAddTask, setShowAddTask] = useState(false)
  // NOTE: [Hardcoded] Data (Creates Array 'tasks')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      noteTitle: 'NOTE #1',
      noteTxt: 'Jan 8st at 12:00pm',
      fav: true,
    },
    {
      id: 2,
      noteTitle: 'NOTE #2',
      noteTxt: 'Jan 2nd at 11:00pm',
      fav: true,
    },
    {
      id: 3,
      noteTitle: 'NOTE #3',
      noteTxt: 'Jan 3rd at 10:00pm',
      fav: false,
    },
  ])

  // #1 | Add New Task
  const addTask = (task) => {
    console.log(task)
    // Gen Random (ID)
    const id = Math.floor(Math.random() * 10000) +1
    console.log(id)
    // Create newTask with (ID)
    const newTask = { id, ...task }
    // Add newTask to Array tasks
    setTasks([...tasks, newTask])
  }

  // #2 | Delete Task 
  const deleteTask = (id) => {
    console.log('Delete', id)
    setTasks(tasks.filter(
      (task) => task.id !== id)
    )
  }
  
  // #3 | Toggle Reminder
  // NOTE: Add prop onToggle to Tasks.js
  const toggleReminder = (id) => {
    console.log(id)
    // Double Click Changes Boolean To Opposite (true/false)
    setTasks(tasks.map(
      (task) => task.id === id ? { 
        ...task, fav: !task.fav 
      } : task
    ))
  }
  
  // onAdd={} Passed into <Header /> as a prop
  // Add onAdd to AddTask Component
  // If showAddTask true then display component
 
  return (
    <div>
      <Navbar />
    
      <Container>
      <Header 
        showAdd={showAddTask} 
        onAdd={() => setShowAddTask(!showAddTask)} 
        title='To-Do App v1' />

      {showAddTask && 
        <AddTask onAdd={addTask}
      />}

      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} 
        /> : 'No To-Dos Available!'
      }

      </Container>

    </div>
  );
}

export default App;
