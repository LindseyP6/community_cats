import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import EditCatForm from './EditCatForm'


function CatsSingle() {
  const [cat, setCat] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    fetch(`/cats/${id}`)
        .then(r => r.json())
        .then(cats =>setCat(cats));
      }, [id])

      console.log(cat)

  const {name, image, description, tnr_status, temperament, gender, human_name } = cat;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}/>
      <li><strong>Gender: </strong>{gender}</li>
      <li><strong>Description: </strong>{description}</li>
      <li><strong>Temperment: </strong>{temperament}</li>
      <li><strong>TNR Status: </strong> {tnr_status}</li>
      <li><strong>Human Caretaker: </strong>{human_name}</li>
      {/* <EditCatForm /> */}
    </div>
  )
}

export default CatsSingle