import { Link } from 'react-router-dom';
import './Navbar.css' ;

const Navbar= () => {
    return (
        <nav className="navbar">
            <ul className='navbarList'>
                <div className='navbarList__leftItem'>
                <li className="navbar__Items"><i class="fa-solid fa-blog"></i>&nbsp;&nbsp;BLOGGER</li>
                <li className="navbar__Items"><Link to="/" style={{textDecoration:"none", color: "inherit"}}>Home</Link></li>
                <li className="navbar__Items"><Link to="/about" style={{textDecoration:"none", color: "inherit"}}>About</Link></li>
                </div>
                <div className='navbarList__rightItem'>
                <li className="navbar__Items"><Link to="/write" style={{textDecoration:"none", color: "inherit"}}>Write</Link></li>
                <li className="navbar__Items"><Link to="/settings" style={{textDecoration:"none", color: "inherit"}}>Settings</Link></li>
                <Link to="/login" style={{textDecoration:"none", color: "inherit"}}><img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' className='topImg'/></Link>
                
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;