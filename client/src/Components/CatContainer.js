import React, { useState } from 'react'
import CatCardsAll from './CatCardsAll';
import FilterCats from './FilterCats';
// import NewCatForm from './CatAddForm';

function CatContainer({catsArray, setCatsArray, currentUser, setSearchTerm, searchTerm}) {

  const catCards = catsArray.map((cat) => (
    <CatCardsAll
      key={cat.id}
      cat={cat}
      currentUser={currentUser}
    />
  ));


  return (
    <div id="allCats">
      <h1>Meet All Of Our Cats!</h1>
      <div className="filterCats">
        <FilterCats 
          setSearchTerm={setSearchTerm} 
          searchTerm={searchTerm} 
          catCards={catCards}/>
      </div>
      <div className="allCatsContainer">
        {catCards}
      </div>
    </div>
  )
}

export default CatContainer

// name={cat.name}
// image={cat.image}
// gender={cat.gender}
// description={cat.description}
// temperament={cat.temperament}
// tnrStatus={cat.tnrStatus}