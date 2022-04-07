import React, {useState} from 'react'

function CatAddForm({catsArray, onAddCatForm}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [gender, setGender] = useState("")
  const [description, setDescription] = useState("")
  const [temperament, setTemperament] = useState("")
  const [tnr_status, setTnr_status] = useState("")
  const [tnr_date, setTnr_date] = useState("")
  const [special_notes, setSpecial_notes] = useState("")

  function handleSubmit(e) {
    const newCat = {
        name,
        image,
        gender,
        description,
        temperament,
        tnr_status,
        tnr_date,
        special_notes,
        // user_id: user.id,
    }
    e.preventDefault();
    fetch("/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((response) => response.json())
      .then(cat => console.log(name))
      .then((cat) => onAddCatForm(cat));
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
{/* 
        <label> Image
          <input>
            name="name"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          </input>
        </label>

        <label> Gender
          <input>
            name="name"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          </input>
        </label>

        <label> Description
          <input>
            name="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          </input>
        </label> */}

      </form>
    </div>
  )
}

export default CatAddForm