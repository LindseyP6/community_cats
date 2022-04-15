import React, { useState } from 'react'
import CatCardsAll from './CatCardsAll';
import FilterCats from './FilterCats';
// import NewCatForm from './CatAddForm';

function CatContainer({catsArray, setCatsArray, currentUser, setSearchTerm, searchTerm, handleChangeToAllCats}) {
  const [toggle, setToggle] = useState("")

  const catCards = catsArray.map((cat) => (
    <CatCardsAll
      key={cat.id}
      cat={cat}
      currentUser={currentUser}
    />
  ));

  function handleChangeToMyCats(){
    const myCatsList = catsArray.filter(cat => currentUser.id === cat.user_id)
    setCatsArray(myCatsList)
  }

  return (
    <div>
      <div className="myCats">
        <FilterCats handleChangeToMyCats={handleChangeToMyCats} setSearchTerm={setSearchTerm} searchTerm={searchTerm} catCards={catCards}/>

        {/* <button onClick={handleChangeToMyCats}>My Cats</button>
        <button onClick={handleChangeToAllCats}>All Zee Cats</button> */}
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