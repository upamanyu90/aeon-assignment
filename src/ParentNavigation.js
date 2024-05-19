import React from "react";
import { NavLink } from "react-router-dom";
import './ParentNavigation.css'

const ParentNavigation = () => {
    return (
      <nav className='parent-navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add-two-numbers'>Add Two Numbers Assignment</NavLink>
        <NavLink to='/create-navbar/'>Create a Navbar Assignment</NavLink>
        <NavLink to='/find-two-indices'>Find two indices Assignment</NavLink>
      </nav>
    )
}

export default ParentNavigation