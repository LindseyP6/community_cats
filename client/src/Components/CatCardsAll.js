import React from 'react'
import {Link} from 'react-router-dom';
import FilterCats from './FilterCats.js'

function CatCardsAll({cat, currentUser}) {
  const {id, name, image, description, tnr_status, temperament, gender, human_name } = cat;

  return (
    <div className="allCatsDetails">
        <h2>{name}</h2>
        <img src={image} alt={name}/>
        <li><strong>Gender: </strong>{gender}</li>
        <li><strong>Description: </strong>{description}</li>
        <li><strong>Temperment: </strong>{temperament}</li>
        <li><strong>TNR Status: </strong> {tnr_status}</li>
        <li><strong>Human Caretaker: </strong>{human_name}</li>
        <Link to={`/cats/${id}`}>
          <button>More Details</button>
        </Link>  
    </div>
  )
}

export default CatCardsAll