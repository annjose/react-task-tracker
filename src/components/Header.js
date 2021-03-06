import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {

    // object decontructing to get the contents of props
    const {qualifier, onAddTask, onResetTasks} = props;

    return (
        // the following tag is HTML header tag and should be lowercase;
        // otherwise React will treat it as JSX component Header and will go infinite loop
        <header className='header'>
            <h1>{qualifier} {props.title}</h1>
            <Button label="Add" color="green" onClick={onAddTask}/>
            <Button label="Reset" color="gray" onClick={onResetTasks}/>
        </header>
    )
}

Header.defaultProps = { qualifier: "Simple" }

// optional PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header