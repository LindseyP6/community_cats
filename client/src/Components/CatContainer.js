import React from 'react'
import CatsAll from './CatsAll';
import CatsSingle from './CatsSingle';
import NewCatForm from './NewCatForm';

function CatContainer({catsArray}) {

  const catMap = catsArray.map(cat => {
    <CatsAll 
      key={cat.id}
      id={cat.id}
      name={cat.name}
      image={cat.image}
      gender={cat.gender}
      description={cat.description}
      temperament={cat.temperament}
      tnrStatus={cat.tnrStatus}
      />
  } )
console.log(catsArray, "container")
  return (
    <div>CatContainer

      {/* <CatsAll/> */}
      {catMap}
      {/* <CatsSingle />
      <NewCatForm /> */}
    </div>
  )
}

export default CatContainer