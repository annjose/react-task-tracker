import PropTypes from 'prop-types';

const Button = ({label, color, onClick}) => {
    return(
        <button className='btn' style={{backgroundColor:color}}
        onClick={onClick} >{label}</button>
    )
}

Button.defaultProps = {label: "Hello"}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button