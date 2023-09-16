import React from 'react'
import './navBar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="desktopMenu">
            <Link className="destopMenuListItem">Home</Link>
            <Link className="destopMenuListItem">About</Link>
            <Link className="destopMenuListItem">Skills</Link>
            <Link className="destopMenuListItem">Contact</Link>
        </div>
        {/* <button className="desktopMenubtn">
            <img src="" alt="" className="desktopMenuImg" />Contact
        </button> */}
    </nav>
  )
}

export default Navbar