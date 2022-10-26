// [React.js]
import { useState } from 'react';
// import logo from './logo.svg';
// [Bootstrap] Component Theme 
import Container from 'react-bootstrap/Container';
// [CUSTOM] Components
import Navbar from './components/Navbar';
//import CustomBtn from './components/CustomBtn.js';
import Header from './components/Header';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';

import './App.scss';

function App() {
  // (Show/Hide) Component state
  const [showAddTask, setShowAddTask] = useState(false)
  // [Hardcoded] TEST Data
  // Creates an array: tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: '#1 Note',
      text: 'Lorem ipsum qui minim labore adipisicing',
      reminder: false,
    },
    {
      id: 2,
      title: '#1 Note',
      text: 'Lorem ipsum qui minim labore adipisicing',
      reminder: true,
    },
    {
      id: 3,
      title: '#1 Note',
      text: 'Lorem ipsum qui minim labore adipisicing',
      reminder: true,
    },
  ])

  // #1 | Add New Task.
  const addTask = (task) => {
    console.log(task)
    // Gen Random(id)
    const id = Math.floor(Math.random() * 10000) +1
    console.log('Task ID:', id)
    // Create New Task
    const newTask = { id, ...task }
    // Add newTask to list
    setTasks([...tasks, newTask])
  }

  // #2 | Delete Task.
  const deleteTask = (id) => {
    console.log('delTask ID:', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // #3 | Toggle Reminder.
  const toggleReminder = (id) => {
    console.log(id)
    // 'DoubleClick' Boolean VAL true/false
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <>
    <Navbar />

    <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} title='Task Manager' />

    {showAddTask && <NewTask onAdd={addTask}/>}

    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To Show'}
    {/*}
    <Header 
      showAddTaskBlockt={showAddTask}
      onAddTaskBlock={ setShowAddTask(!showAddTask) } 
    />
    {showAddTask && <NewTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task To Show!'}
    */}
    {/*
    <Header 
      setDisplayNewTask={displayNewTask}
      onDisplayNewTask={() => setDisplayNewTask(!displayNewTask)}
    />
    
    <div className="App">
      <Container>
        { displayNewTask && <NewTask onNew={newTask}/> }
        {
          tasks.length > 0 ?
          <Tasks 
            tasks={tasks}
            onDelete={delTask}
            onToggle={toggleReminder}
          /> : 'No Task!!! Start Creating :) '
        }
      </Container>
    </div> */}
    </>
  );
}

export default App;
