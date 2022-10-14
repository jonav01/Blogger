import './Navbar.css' ;

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbarList'>
                <div className='navbarList__leftItem'>
                <li className="navbar__Items">Home</li>
                <li className="navbar__Items">Blogs</li>
                <li className="navbar__Items">Admin</li>
                </div>
                <div className='navbarList__rightItem'>
                <li className="navbar__Items">Sign In</li>
                <li className="navbar__Items">Sign Up</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;