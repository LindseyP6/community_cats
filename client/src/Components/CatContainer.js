import React from 'react'
import CatCardsAll from './CatCardsAll';
import CatsSingle from './CatCardOne';
import NewCatForm from './CatAddForm';

function CatContainer({catsArray}) {
  const catCards = catsArray.map((cat) => (
    <CatCardsAll
      key={cat.id}
      cat={cat}
    />
  ));

  return (
    <div className="catContainer">{catCards}</div>
  )
}

export default CatContainer

// name={cat.name}
// image={cat.image}
// gender={cat.gender}
// description={cat.description}
// temperament={cat.temperament}
// tnrStatus={cat.tnrStatus}