import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css'

const Navbar = (props) => {

    return (
        <nav className='navbar'>
            <h1>MEME GENERATOR</h1>
            <ul className={props.classes ? 'links open' : 'links'}>
                <li><NavLink onClick={props.activeNav} exact activeClassName='activeClass' to='/'>Home</NavLink></li>
                <li><NavLink onClick={props.activeNav} exact activeClassName='activeClass' to='/main'>Generator</NavLink></li>
                <li><NavLink onClick={props.activeNav} exact activeClassName='activeClass' to='/about'>About</NavLink></li>
            </ul>
            <div onClick={props.activeNav} className="burgerMenu">
                <div className='first'></div>
                <div className='second'></div>
                <div className='third'></div>
            </div>
        </nav>
    )
}

export default Navbar
