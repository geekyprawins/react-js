import PropTypes from "prop-types";
import Button from './Button'
const Header = (props) => {
    
    const onClick = () =>{
        console.log("Clicked!");
    }
  return (
    <header className='header'>
      <h1>Task tracker-{props.title}</h1>
      <Button title='Add' color='green' onClick={onClick}/>
    </header>
  );
};
// (props) can be replaced with ({title}) and props.title with title
Header.defaultProps = {
  title: "Bobby",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = { color: "red", backgroundColor: "black" };
// css in js
export default Header;
