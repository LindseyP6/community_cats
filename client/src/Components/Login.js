import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Signup from './Signup'

function Login({setCurrentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const [formIsShowing, setFormIsShowing] = useState(false)
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault()
    const user = {
        email: email,
        password
    }
   
    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(json => {
        setCurrentUser(user)
        if(json.errors) setErrors(json.errors)
    })
    // history.go(0)
    history.push(`/`)
}


function toggleEditForm() {
  setFormIsShowing((formIsShowing) => !formIsShowing);
}

  return (
    <div className="login">
      <form 
      onSubmit={handleSubmit}
      >
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
        <button type="submit">Login</button>
      </form>

      {errors?errors.map(e => <div>{e}</div>):null}


      <button onClick={toggleEditForm}>New to Community Cat Catalog? Sign up here!</button>
      {formIsShowing ? <Signup /> 
      : null}
    </div>
  );
}

export default Login