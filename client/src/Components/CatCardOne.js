import React, {useEffect, useState} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import EditCatForm from './EditCatForm';
import Modal from './Modal';

function CatCardOne({handleCatUpdate, handleDelete}) {
  const [cat, setCat] = useState({});
  const [formIsShowing, setFormIsShowing] = useState(false)
  const [show, setShow] = useState(false);
  const history = useHistory();
  const {id} = useParams()

  useEffect(() => {
    fetch(`/cats/${id}`)
        .then(r => r.json())
        .then(cat => setCat(cat));
      }, [id])

  function toggleEditForm() {
    setFormIsShowing((formIsShowing) => !formIsShowing);
  }

  function handleDeleteFromDatabase(){
    fetch(`/cats/${id}`, {
      method: "DELETE",
    })
  }

  function handleDeleteClick(){
    handleDelete(id)
    handleDeleteFromDatabase()
    history.push('/cats')
    history.go(0)
  }

  const {name, image, description, tnr_status, temperament, gender, human_name } = cat;
  return (
    <div className="catCardOne">
      <div className="linkBack">
        <Link to={`/cats`}>
          <button>Back to All Cats</button>
        </Link>  
      </div>
      <div className="singleCatDetails">
        <h2>{name}</h2>
        <img src={image} alt={name}/>
        <li><strong>Gender: </strong>{gender}</li>
        <li><strong>Description: </strong>{description}</li>
        <li><strong>Temperment: </strong>{temperament}</li>
        <li><strong>TNR Status: </strong> {tnr_status}</li>
        <li><strong>Human Caretaker: </strong>{human_name}</li>
      </div>

      <button onClick={handleDeleteClick}>Delete</button>
      {/* onClick={() => handleDelete(id)} */}

      <button onClick={toggleEditForm}>Edit Details</button>
      {formIsShowing ? <EditCatForm handleCatUpdate={handleCatUpdate}/> 
      : null}

      <button onClick={() => setShow(true)}>Modal</button>
      <Modal onClose={() => setShow(false)} handleCatUpdate={handleCatUpdate} show={show}/> 

    </div>
  )
}

export default CatCardOne