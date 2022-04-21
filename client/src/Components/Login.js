import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Signup from './Signup';

function Login({setCurrentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [show, setShow] = useState(false);

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

function handleSignupModal(){
  setShow(true)
}

  return (
    <div id="loginPage">
      <iframe src="https://giphy.com/embed/jS6sVMK2fu4Uw" width="333" height="420" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <div id="loginPageContainer">
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
          <button className="allButtons" onClick={handleSignupModal}>New to Community Cat Catalog? Sign up here!</button> 
          <Signup
            onClose={() => setShow(false)}
            show={show}/>
        </div>
        </div>
    </div>
  );
}

export default Login
