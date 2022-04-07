import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>Community Cat Catalog Header
      <div className="navLinks">
        <NavLink exact to="/">Main/Map  |  </NavLink>  
        <NavLink exact to="/cats">All Cats  |  </NavLink>
        <NavLink exact to="/signup">Signup  |  </NavLink>
        <NavLink exact to="/login">Login  |  </NavLink>
        <NavLink exact to="/new">Add Cat!  |  </NavLink>
      </div>
    </div>
  )
}

export default Header