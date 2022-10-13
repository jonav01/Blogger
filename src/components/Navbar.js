import './Navbar.css' ;

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbarList'>
                <li className="navbar__Items">Home</li>
                <li className="navbar__Items">Blogs</li>
                <li className="navbar__Items">Admin</li>
            </ul>
        </nav>
    )
}

export default Navbar;