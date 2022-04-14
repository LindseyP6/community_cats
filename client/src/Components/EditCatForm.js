import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';

function EditCatForm({catsArray, handleCatUpdate}) {
  const [formState, setFormState] = useState({});
  const {id} = useParams();
  const history = useHistory();
          // history.push(`/cats`)

  useEffect(() => {
    fetch(`/cats/${id}`)
    .then(r => r.json())
    .then((data) => setFormState(data)); 
  }, [id])
  

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/cats/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
      .then(r => r.json())
      .then(updatedCat => {
        handleCatUpdate(updatedCat)
        history.go(0)
      })
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value})
  }

  const {name, image, gender, description, temperament, tnr_status, tnr_date, trap_date, special_notes, user_id} = formState;

  return (
    <div className="catUpdateForm">
      Update Your Cat Information
      <form onSubmit={handleSubmit}>
        <label>Name: 
          <input
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>User ID: 
          <input
            name="name"
            value={user_id}
            onChange={handleChange}
          />
        </label>

        <label>Image: 
          <input
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <label>Gender: 
          <input
            name="gender"
            value={gender}
            onChange={handleChange}
          />
        </label>
        <label>Description: 
          <input
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>Temperament: 
          <input
            name="temperament"
            value={temperament}
            onChange={handleChange}
          />
        </label>
        <label>TNR Status: 
          <input
            name="tnr_status"
            value={tnr_status}
            onChange={handleChange}
          />
        </label>
        <label>TNR Date: 
          <input
            name="tnr_date"
            value={tnr_date}
            onChange={handleChange}
          />
        </label>
        <label>Trap Date: 
          <input
            name="trap_date"
            value={trap_date}
            onChange={handleChange}
          />
        </label>
        <label>Special Notes: 
          <input
            name="special_notes"
            value={special_notes}
            onChange={handleChange}
          />
        </label>
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

export default EditCatForm