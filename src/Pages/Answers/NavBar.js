import React from "react";
import useIsMobile from "./common/useIsMobile";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const isMobile = useIsMobile()
  return isMobile ? <NavBarMobile /> : <NavBarDesktop />
}

export default NavBar