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
          <NavLink exact to="/home" className="navLinkActive"> Cat-Map </NavLink>  
        </button>

        <button>
          <NavLink exact to="/new" className="navLinkActive">Add A Cat</NavLink>
        </button>

        <button>
          <NavLink exact to="/resources" className="navLinkActive">Resources</NavLink>
        </button>
      </div>

      <div className='siteNameHeaader'>Community Cat Catalog</div>
      <div className="helloUser">
        {currentUser ? <p>Hello {currentUser.name}</p> : null}
        <button>
          <NavLink exact to="/user-profile" className="userNavLinks">Profile</NavLink>  
        </button>
        {/* <br></br> */}
        <button className="userNavLinks" onClick={logout}>Logout</button>
      </div>
      
    </div>

    // </div>
  )
}

export default Header