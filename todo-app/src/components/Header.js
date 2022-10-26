// [React.js]
import PropTypes from 'prop-types';
// [CUSTOM] Components
import CustomBtn from './CustomBtn';

// showAdd Change button text 
const Header = ({title, onAdd, showAdd}) => {

  /*
  const onClick = () => {
    console.log('Button Clicked')
  }  <Button... onClick={onClick}

  <CustomBtn...
  If showAdd true (displayed/shown) on screen
  Then display close
  */

  return (
    <header style={headingStyle}>

      <h1 className='display-1 fw-bolder my-3'>{title}</h1>

      <CustomBtn 
        col={showAdd ? 'danger' : 'dark'} 
        txt={showAdd ? 'CLOSE' : 'ADD NEW TASK'} 
        onClick={onAdd} 
      />

    </header>
  )
}

Header.defaultProps = {
  title: 'To-Do App',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const headingStyle = {
  textAlign: 'center',
}

export default Header
