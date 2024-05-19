import React from "react";
import { Outlet } from "react-router-dom";
import './NavBarDesktop.css'

const NavBarDesktop = () => {
    console.log('Desktop')
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <a href='/'>AEON</a>
          <a href='showcase'>Showcase</a>
          <a href='docs'>Docs</a>
          <a href='blog'>Blog</a>
          <a href='analytics'>Analytics</a>
          <a href='templates'>Templates</a>
          <a href='enterprise'>Enterprise</a>
        </nav>
        <input className="navbar-search" type="text" placeholder=" Search documentation..." />
      </div>
      <Outlet />
    </>

  )
}

export default NavBarDesktop