import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link >Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link >Experience</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link >About Me</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar;