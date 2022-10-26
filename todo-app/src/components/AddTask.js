// [React.js] 
import { useState } from 'react';
// [Bootstrap] Component Theme
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// [CUSTOM] Component
// import CustomBtn from './CustomBtn';
import './Component.scss';

const AddTask = ({ onAdd }) => {
  // useState(Hooks)
  const [noteTitle, setNoteTitle] = useState('')
  const [noteTxt, setNoteTxt] = useState('')
  const [fav, setFav] = useState(false)
  
  // e (event)
  const onSubmit = (e) => {
    // Error Handling (101)
    // Prevent EMPTY Form Submit
    e.preventDefault()

    // If NOT noteTitle / noteTitle is EMPTY
    if(!noteTitle) {
      alert('ERROR: INVALID!')
      return
    }
    // If PASSED Call onAdd, Pass Objects
    onAdd({ noteTitle, noteTxt, fav })

    // [Reset] • Clear Form To Defaults
    setNoteTitle('')
    setNoteTxt('')
    setFav(false)
  }

  return (
    <Form onSubmit={onSubmit}>

      <Form.Group 
        className='mx-3 mb-3' 
        controlId='formNoteTitle'
      >
        <Form.Label>Title</Form.Label>

        <Form.Control 
          value={noteTitle} 
          onChange={(e) => setNoteTitle(e.target.value)} 
          type='text' 
          placeholder='UNTITLED'
        >
        </Form.Control>

      </Form.Group>

      <Form.Group 
        className='mx-3 mb-3' 
        controlId='formNoteText'
      >
        <Form.Label>Note</Form.Label>

        <Form.Control 
          value={noteTxt} 
          onChange={(e) => setNoteTxt(e.target.value)} 
          type='text' 
          placeholder='Start Typing...'>
        </Form.Control>

      </Form.Group>

      <Form.Group 
        className='mx-3 mb-3' 
        controlId='formNoteFavoutrite'>

        <Form.Label>CheckBox</Form.Label>

        <Form.Check 
          checked={fav} 
          value={fav} 
          onChange={(e) => setFav(e.currentTarget.checked)} 
          type='checkbox' label='Favourite' />

      </Form.Group>

      <Button 
        className='w-100 custom_btn' 
        variant='primary' 
        type='submit' 
        value='Save Task'
      > Save
      </Button>

    </Form>
  );
}

export default AddTask;
