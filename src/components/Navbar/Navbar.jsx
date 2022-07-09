const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-options">
                <li className="navbar-brand">Logo</li>
                <li className="navbar-search">
                    <input type="text" placeholder="Search or jump to..." />
                </li>
                <li className="navbar-link">Pull Requests</li>
                <li className="navbar-link">Issues</li>
                <li className="navbar-link">Marketplace</li>
                <li className="navbar-link">Explore</li>
                <li className="util-spacer"></li>
                <li className="navbar-option">Notifications</li>
                <li className="navbar-option">Repos</li>
                <li className="navbar-option">Profile</li>
            </ul>
        </nav>
    );
};

export default Navbar;
