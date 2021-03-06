import PropTypes from 'prop-types';

const Header = (props) => {

    // object decontructing to get the contents of props
    const {qualifier} = props;
    return (
        // the following tag is HTML header tag and should be lowercase;
        // otherwise React will treat it as JSX component Header and will go infinite loop
        <header>
            <h1>{qualifier} {props.title}</h1>
        </header>
    )
}

Header.defaultProps = { qualifier: "Simple" }

// optional PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header