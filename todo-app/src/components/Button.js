// [React.js]
import PropTypes from 'prop-types';
// [Bootstrap] Component Theme
import Button from 'react-bootstrap/Button';

const CustomBtn = ({ color, text, onClick }) => {
  return <Button 
           className='mb-4 w-100'
           variant={color} 
           onClick={onClick}>
            {text}
         </Button>
}

CustomBtn.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default CustomBtn;
