import React, {useState} from 'react'

function Signup({setCurrentUser}) {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

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
  }

  return (
    <div className="signup">
      <form onSubmit={onSubmit}
      >
        <label> Name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>Location: 
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>Email Address: 
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </label>

        <label>Select A Password: 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="allButtons" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup