import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';

function Signup(props, setCurrentUser) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault();
        const user = {
          name,
          location,
          email,
          password
        }
    
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            if(json.errors) setErrors(Object.entries(json.errors))
        })
        history.push(`/home`)
      }
    if (!props.show) {
        return null;
    }

  return (
    <div className="modal">
      <div className="model-content">

        <div className="modal-header">
          <h2>Enter details to sign up for CCC!</h2>
        </div>

        <div className="modal-body">
            <div className="signupForm">
                <form onSubmit={onSubmit}>
                    <label> Name: 
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Location: 
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Email Address: 
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>Select A Password: 
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                    <br></br>
                    <br></br>

                    <button className="allButtons" type="submit">Sign Up & Log In</button>
                    <button id="modal-close" onClick={props.onClose}>Close</button>
                </form>
                </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;
