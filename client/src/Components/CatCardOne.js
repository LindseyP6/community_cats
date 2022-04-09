import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import EditCatForm from './EditCatForm';
import Modal from './Modal';

function CatsSingle({handleCatUpdate, handleDelete}) {
  const [cat, setCat] = useState([]);
  const [formIsShowing, setFormIsShowing] = useState(false)
  const [show, setShow] = useState(false);

  const {id} = useParams()

  useEffect(() => {
    fetch(`/cats/${id}`)
        .then(r => r.json())
        .then(cats =>setCat(cats));
      }, [id])

  function toggleEditForm() {
    setFormIsShowing((formIsShowing) => !formIsShowing);
  }

  function handleDeleteClick(){
    fetch(`/cats/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(handleDelete(id))
  }

  const {name, image, description, tnr_status, temperament, gender, human_name } = cat;
  return (
    <div className="catCardOne">
      <h2>{name}</h2>
      <img src={image} alt={name}/>
      <li><strong>Gender: </strong>{gender}</li>
      <li><strong>Description: </strong>{description}</li>
      <li><strong>Temperment: </strong>{temperament}</li>
      <li><strong>TNR Status: </strong> {tnr_status}</li>
      <li><strong>Human Caretaker: </strong>{human_name}</li>


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

export default CatsSingle