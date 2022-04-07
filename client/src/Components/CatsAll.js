import React from 'react'
import FilterCats from './FilterCats.js'

function CatsAll({name, image, description, tnrStatus, temperamen}) {

  console.log("contAll", name)
  return (
    <div className="allCats">
      {/* <h2>{name}</h2>
      <img src={image} alt={name}/>
      <p>{description}</p>
      <p>Tipped/TNRed? {tnrStatus}</p>
      <p>Temperament:{temperament}</p> */}
      {/* <FilterCats /> */}
    </div>
  )
}

export default CatsAll