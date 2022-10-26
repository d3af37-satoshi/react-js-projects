// [Bootstrap] React.js
import Card from 'react-bootstrap/Card';
// React Icons Library
import { FaTimes } from 'react-icons/fa';

import './Component.scss';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
      className={`pt-4 ${task.fav ? 'custom_border' : ''}`} 
      onDoubleClick={() => onToggle(task.id)}
    >
      <Card className='custom_card bg-dark text-white'>
        <Card.Body>

          <Card.Title className='d-flex justify-content-between'>
            {task.noteTitle} 
            <FaTimes onClick={() => onDelete(task.id)} />
          </Card.Title>

          <Card.Text>{task.noteTxt}</Card.Text>

        </Card.Body>
      </Card>

    </div>
  );
}

export default Task;
