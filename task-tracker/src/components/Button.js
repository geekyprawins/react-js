import PropTypes from 'prop-types';
function Button( {title, color , onClick}) {

    return (
        <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{title}</button>

    )
}

Button.defaultProps = {
    color : 'steelblue',
    title : 'Hello'
}

Button.propTypes = {

    color : PropTypes.string,
    title : PropTypes.string,
    onClick : PropTypes.func
}

export default Button
