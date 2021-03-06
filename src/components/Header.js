const Header = () => {

    return (
        // the following tag is HTML header tag and should be lowercase;
        // otherwise React will treat it as JSX component Header and will go infinite loop
        <header>
            <h1>Task Tracker</h1>
        </header>
    )
}

export default Header