import React from "react";
import { Outlet } from "react-router-dom";
import MobileMenuAccordion from "./common/MobileMenuAccordion";
import './NavBarMobile.css'

const NavBarMobile = () => {
    const menuItems = [
      {
        label: 'Showcase',
        to: 'showcase'
      },
      {
        label: 'Docs',
        to: 'docs'
      },
      {
        label: 'Blog',
        to: 'blog'
      },
      {
        label: 'Analytics',
        to: 'analytics'
      },
      {
        label: 'Templates',
        to: 'templates'
      },
      {
        label: 'Enterprise',
        to: 'enterprise'
      },
    ]
  return (
    <>
      <div>
        <MobileMenuAccordion items={menuItems}/>
      </div>
      <Outlet />
    </>

  )
}

export default NavBarMobile