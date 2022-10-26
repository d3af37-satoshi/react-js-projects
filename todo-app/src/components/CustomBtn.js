// [React.js]
import PropTypes from 'prop-types';
// [Bootstrap] Component Theme
import Button from 'react-bootstrap/Button';
import './Component.scss';

const CustomBtn = ({txt, col, onClick}) => {
  return (
    <Button 
      className='mb-3 w-100 custom_btn' 
      variant={col} 
      onClick={onClick}
    > {txt}
    </Button>
  );
}

CustomBtn.propTypes = {
  txt: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default CustomBtn;
