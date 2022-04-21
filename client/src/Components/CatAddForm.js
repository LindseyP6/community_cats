import React, { useState } from "react";
import {useHistory} from "react-router-dom"

function CatAddForm({ addNewCat, currentUser }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [temperament, setTemperament] = useState("");
  const [tnr_status, setTnr_status] = useState("");
  const [tnr_date, setTnr_date] = useState("");
  const [trap_date, setTrap_date] = useState("");
  const [special_notes, setSpecial_notes] = useState("");
  const [user_id, setUser_id] = useState("");
  const [address, setAddress] = useState("");
  const history= useHistory();

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
      user_id: currentUser.id,
      address,
    };
    fetch("/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((r) => r.json())
      .then((cat) => addNewCat(cat));
    setName("");
    setImage("");
    setGender("");
    setDescription("");
    setTemperament("");
    setTnr_status("");
    setTnr_date("");
    setTrap_date("");
    setSpecial_notes("");
    setAddress("");
    history.push(`/home`)
  }

  return (
    <div className="newCatPage">

      <form onSubmit={handleSubmit} className="addCatForm">
      <h1>ADD A NEW CAT</h1>
      <p>After adding a cat, you will be redirected to the map <br></br>where you can view your cat!</p>
      <br></br>
        <div className="catAddDetails">
          <label>
            Name <br></br>
            <input
              className="addFormField1"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {/* <br></br> */}

          <label>
            Image <br></br>
            <input
              className="addFormField2"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label>
            Location <br></br>
            <input
              className="addFormField10"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <label>
            Gender <br></br>
            <input
              className="addFormField3"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>

          <label>
            Description <br></br>
            <input
              className="addFormField4"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label>
            Temperament <br></br>
            <input
              className="addFormField5"
              name="temperament"
              value={temperament}
              onChange={(e) => setTemperament(e.target.value)}
            />
          </label>

          <label>
            TNR Status <br></br>
            <input
              className="addFormField6"
              name="tnr_status"
              value={tnr_status}
              onChange={(e) => setTnr_status(e.target.value)}
            />
          </label>

          <label>
            TNR Date <br></br>
            <input
              className="addFormField7"
              name="tnr_date"
              value={tnr_date}
              onChange={(e) => setTnr_date(e.target.value)}
            />
          </label>

          <label>
            Trap Date <br></br>
            <input
              className="addFormField8"
              name="trap_date"
              value={trap_date}
              onChange={(e) => setTrap_date(e.target.value)}
            />
          </label>

          <label>
            Special Notes <br></br>
            <input
              className="addFormField9"
              name="special_notes"
              value={special_notes}
              onChange={(e) => setSpecial_notes(e.target.value)}
            />
          </label>

          <label className="hiddenUserField">
            User:
            <input 
              name="currentUser" 
              value={user_id} 
              onChange={(e) => setUser_id(e.target.value)}/>
          </label>

        </div>

        <p style={{fontSize:"small"}}>Must include at least the cat's name and location (address format)</p>
        <button 
          type="submit" 
          name="submit" 
          value="Join!" 
          className="allButtons">
          <strong>Add your Cat!</strong>
        </button>
      </form>
    </div>
  );
}

export default CatAddForm;
