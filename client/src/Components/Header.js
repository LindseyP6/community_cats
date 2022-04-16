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

// console.log("header", currentUser.name)

  return (
    // <div id="top-bar">
    <div id="header">
      <div className="navLinks">
        <button>
          <NavLink exact to="/" className="navLinkActive"> Home </NavLink>  
        </button>

        <button>
          <NavLink exact to="/cats" className="navLinkActive">All Cats</NavLink>
        </button>

        <button>
          <NavLink exact to="/new" className="navLinkActive">Add Cat!</NavLink>
        </button>

        <Link to={`/login`}>
          <button>Login</button>
        </Link>  
        <button onClick={logout}>Logout</button>
      </div>

      <div className='siteNameHeaader'>Community Cat Catalog</div>
      <div className="helloUser">
        {currentUser ? <p>Hello {currentUser.name}</p> : null}
        <button>
          <NavLink exact to="/user-profile" className="navLinkActive"> My Profile </NavLink>  
        </button>
      </div>
      
    </div>

    // </div>
  )
}

export default Header