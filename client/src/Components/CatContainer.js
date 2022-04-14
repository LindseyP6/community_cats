import React from 'react'
import CatCardsAll from './CatCardsAll';
import FilterCats from './FilterCats';
// import NewCatForm from './CatAddForm';

function CatContainer({catsArray, currentUser, handleChangeToMyCats, setSearchTerm, searchTerm}) {

  const catCards = catsArray.map((cat) => (
    <CatCardsAll
      key={cat.id}
      cat={cat}
      currentUser={currentUser}
    />
  ));

  return (
    <div>
      <div className="myCats">
        <FilterCats handleChangeToMyCats={handleChangeToMyCats} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        {/* <button onClick={handleChangeToAllCats}>All Cats</button> */}
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