import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Signup from './SignupOld'
import Signup2 from './Signup';
import EditCatModal from './EditCatModal';

function Login({setCurrentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const [formIsShowing, setFormIsShowing] = useState(false)
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


function toggleEditForm() {
  setFormIsShowing((formIsShowing) => !formIsShowing);
}

function handleSignupModal(){
  setShow(true)
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
          {/* <button className="allButtons" onClick={toggleEditForm}>New to Community Cat Catalog? Sign up here!</button> */}
          {/* {formIsShowing ? <Signup /> 
          : null} */}

          {/* <button className="allButtons" onClick={handleSignupModal}>New to Community Cat Catalog? Sign up here!</button>
          <Signup 
            show={show}
            onClose={() => setShow(false)}
            /> */}

<button className="allButtons" onClick={handleSignupModal}>New to Community Cat Catalog? Sign up here!</button> 
<Signup2
onClose={() => setShow(false)}
// handleCatUpdate={handleCatUpdate}
show={show}
/>
        </div>
    </div>
  );
}

export default Login

// function handleModalClick(){
//   setShow(true)
// }

// <button className="allButtons" onClick={handleModalClick}>
// Edit Cat
// </button>
// <EditCatModal
// onClose={() => setShow(false)}
// handleCatUpdate={handleCatUpdate}
// show={show}
// />