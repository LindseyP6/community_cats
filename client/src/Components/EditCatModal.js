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
          <h4>Edit Cat Form</h4>
        </div>
        <div className="modal-body">
          <div className="catUpdateForm">
            Update Your Cat Information
            <form onSubmit={handleEditSubmit} >
              <label>
                Name:
                <input name="name" value={name} onChange={handleChange} />
              </label>
              <label>
                User ID:
                <input name="name" value={user_id} onChange={handleChange} />
              </label>

              <label>
                Image:
                <input name="image" value={image} onChange={handleChange} />
              </label>
              <label>
                Gender:
                <input name="gender" value={gender} onChange={handleChange} />
              </label>
              <label>
                Description:
                <input
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </label>
              <label>
                Temperament:
                <input
                  name="temperament"
                  value={temperament}
                  onChange={handleChange}
                />
              </label>
              <label>
                TNR Status:
                <input
                  name="tnr_status"
                  value={tnr_status}
                  onChange={handleChange}
                />
              </label>
              <label>
                TNR Date:
                <input
                  name="tnr_date"
                  value={tnr_date}
                  onChange={handleChange}
                />
              </label>
              <label>
                Trap Date:
                <input
                  name="trap_date"
                  value={trap_date}
                  onChange={handleChange}
                />
              </label>
              <label>
                Special Notes:
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
                className="submit"
              >
                <strong>Enter!</strong>
              </button>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default EditCatModal;
