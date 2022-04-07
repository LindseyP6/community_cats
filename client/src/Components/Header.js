import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>Community Cat Catalog Header
      <NavLink exact to="/">Main/Map  |  </NavLink>  
      <NavLink exact to="/cats">All Cats  |  </NavLink>
      <NavLink exact to="/signup">Signup  |  </NavLink>
      <NavLink exact to="/login">Login  |  </NavLink>
    </div>
  )
}

export default Header