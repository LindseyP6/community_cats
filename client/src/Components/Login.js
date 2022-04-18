import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Signup from './Signup'

function Login({setCurrentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const [formIsShowing, setFormIsShowing] = useState(false)
  const history = useHistory();

  function handleLoginSubmit(e){
    e.preventDefault()
    const user = {
        email,
        password
    }
   
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => {
        setCurrentUser(user)
        // if(user.errors) setErrors(user.errors)
    })
    history.push(`/home`)
}


function toggleEditForm() {
  setFormIsShowing((formIsShowing) => !formIsShowing);
}

  return (
    <div id="loginPage">
      <h1>Community Cat Catalog</h1>
      <div className="loginOrSignUp">
        <form onSubmit={handleLoginSubmit}>
          <label>Email: 
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>Password: 
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="allButtons" type="submit">Login</button>
        </form>

        {errors?errors.map(e => <div>{e}</div>):null}

        </div>
        
        <div className="signInToggle">
          <button className="allButtons" onClick={toggleEditForm}>New to Community Cat Catalog? Sign up here!</button>
          {formIsShowing ? <Signup /> 
          : null}
        </div>
    </div>
  );
}

export default Login