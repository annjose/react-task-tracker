import PropTypes from 'prop-types';

const Header = (props) => {

    // object decontructing to get the contents of props
    const {one} = props;
    return (
        // the following tag is HTML header tag and should be lowercase;
        // otherwise React will treat it as JSX component Header and will go infinite loop
        <header>
            <h1>{props.title} Task Tracker - {one} </h1>
        </header>
    )
}

Header.defaultProps = { title: "Default" }

// optional PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header