import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';

function EditCatModal(props, handleCatUpdate) {
    const [formState, setFormState] = useState({});
    const {id} = useParams();
    const history = useHistory();
  
    useEffect(() => {
      fetch(`/cats/${id}`)
      .then(r => r.json())
      .then((data) => setFormState(data)); 
    }, [id])
    
    function handleEditSubmit(e) {
      e.preventDefault();
      fetch(`/cats/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })
        .then(r => r.json())
        .then(() => handleCatUpdate(id))
        history.go(0)
    }
  
    function handleChange(event) {
      const { name, value } = event.target;
      setFormState({...formState, [name]: value})
    }
  
    const {name, image, gender, description, temperament, tnr_status, tnr_date, trap_date, special_notes, user_id} = formState;
  
    if (!props.show) {
        return null;
    }

  return (
    <div className="modal">
      <div className="model-content">
        <div className="modal-header">
          <h2>Edit Cat Details</h2>
        </div>
        <div className="modal-body">
          <div className="catUpdateForm">
            <form onSubmit={handleEditSubmit} >
              <label>
                Name:
                <input 
                  name="name" 
                  value={name} 
                  onChange={handleChange} />
              </label>
              <br></br>

              <label>
                Image:
                <input 
                  name="image" 
                  value={image} 
                  onChange={handleChange} />
              </label>
              <br></br>

              <label>
                Gender:
                <input 
                  name="gender" 
                  value={gender} 
                  onChange={handleChange} />
              </label>
              <br></br>

              <label>
                Description:
                <input
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </label>
              <br></br>

              <label>
                Temperament:
                <input
                  name="temperament"
                  value={temperament}
                  onChange={handleChange}
                />
              </label>
              <br></br>

              <label>
                TNR Status:
                <input
                  name="tnr_status"
                  value={tnr_status}
                  onChange={handleChange}
                />
              </label>
              <br></br>

              <label>
                TNR Date:
                <input
                  name="tnr_date"
                  value={tnr_date}
                  onChange={handleChange}
                />
              </label>
              <br></br>

              <label>
                Trap Date:
                <input
                  name="trap_date"
                  value={trap_date}
                  onChange={handleChange}
                />
              </label><br></br>

              <label>
                Special Notes:
                <input
                  name="special_notes"
                  value={special_notes}
                  onChange={handleChange}
                />
              </label>
              <br></br>
<span>

              <button
                type="submit"
                name="submit"
                value="Join!"
                className="submit"
              >
                <strong>Enter!</strong>
              </button>
               <button id="modal-close" onClick={props.onClose}>Close</button>
            </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCatModal;
