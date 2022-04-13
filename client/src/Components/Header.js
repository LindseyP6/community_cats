import React from 'react'
import { NavLink, Link } from "react-router-dom";

function Header({setCurrentUser, currentUser}) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
      setCurrentUser(null)
    })
}

console.log("header", currentUser)

  return (
    <div className="header">
      <h2>Community Cat Catalog</h2>
      <div className="navLinks">
        <NavLink exact to="/">Home  |  </NavLink>  
        <NavLink exact to="/cats">All Cats  |  </NavLink>
        <NavLink exact to="/new">Add Cat!  |  </NavLink>
        <Link to={`/login`}>
          <button>Login</button>
        </Link>  
        <button onClick={logout}>Logout</button>
      </div>
      
      <div className="helloUser">
        {currentUser ? <h4>Hello {currentUser.name}</h4> : null}
      </div>
    </div>
  )
}

export default Header