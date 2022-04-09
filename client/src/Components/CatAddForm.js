import React, {useState} from 'react'

function CatAddForm({catsArray, onAddCatForm}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [gender, setGender] = useState("")
  const [description, setDescription] = useState("")
  const [temperament, setTemperament] = useState("")
  const [tnr_status, setTnr_status] = useState("")
  const [tnr_date, setTnr_date] = useState("")
  const [trap_date, setTrap_date] = useState("")
  const [special_notes, setSpecial_notes] = useState("")
  const [user_id, setUser_id] = useState("")
  const [address, setAddress] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    const newCat = {
        name,
        image,
        gender,
        description,
        temperament,
        tnr_status,
        tnr_date,
        trap_date,
        special_notes,
        user_id,
    }
    fetch("/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then(r => r.json())
      .then((data) => onAddCatForm(data)); 
      setName(""); 
      setImage(""); 
      setGender(""); 
      setDescription(""); 
      setTemperament(""); 
      setTnr_status(""); 
      setTnr_date(""); 
      setTrap_date(""); 
      setSpecial_notes(""); 
      setUser_id("");
  }

  return (
    <div className="catAddForm">
      ADD A NEW CAT
      <form onSubmit={handleSubmit}>
        <label>Name: 
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>User ID: 
          <input
            name="name"
            value={user_id}
            onChange={(e) => setUser_id(e.target.value)}
          />
        </label>

        <label>Image: 
          <input
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>Gender: 
          <input
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label>Description: 
          <input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>Temperament: 
          <input
            name="temperament"
            value={temperament}
            onChange={(e) => setTemperament(e.target.value)}
          />
        </label>
        <label>TNR Status: 
          <input
            name="tnr_status"
            value={tnr_status}
            onChange={(e) => setTnr_status(e.target.value)}
          />
        </label>
        <label>TNR Date: 
          <input
            name="tnr_date"
            value={tnr_date}
            onChange={(e) => setTnr_date(e.target.value)}
          />
        </label>
        <label>Trap Date: 
          <input
            name="trap_date"
            value={trap_date}
            onChange={(e) => setTrap_date(e.target.value)}
          />
        </label>
        <label>Special Notes: 
          <input
            name="special_notes"
            value={special_notes}
            onChange={(e) => setSpecial_notes(e.target.value)}
          />
        </label>
        {/* <label>Location/Address: 
          <input
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label> */}
        <button 
          type="submit"
          name="submit"
          value="Join!"
          className="submit"> 
          <strong>Enter!</strong>
        </button>
      </form>
    </div>
  )
}

export default CatAddForm