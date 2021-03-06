const Header = (props) => {

    // object decontructing to get the contents of props
    const {a, b} = props;
    return (
        // the following tag is HTML header tag and should be lowercase;
        // otherwise React will treat it as JSX component Header and will go infinite loop
        <header>
            <h1>{props.title} Task Tracker - {a} {b} </h1>
        </header>
    )
}

Header.defaultProps = { title: "Default Task Tracker" }

export default Header