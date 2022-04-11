import React from 'react'
import { NavLink } from "react-router-dom";

function Header({setCurrentUser, currentUser}) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
      setCurrentUser(null)
    })
}


  return (
    <div className="header">
      <h2>Community Cat Catalog</h2>
      <div className="navLinks">
        <NavLink exact to="/">Main/Map  |  </NavLink>  
        <NavLink exact to="/cats">All Cats  |  </NavLink>
        <NavLink exact to="/signup">Signup  |  </NavLink>
        <NavLink exact to="/login">Login  |  </NavLink>
        <NavLink exact to="/new">Add Cat!  |  </NavLink>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="helloUser">
        {currentUser ? <h4>Hello {currentUser.name}</h4> : null}
      </div>
    </div>
  )
}

export default Header