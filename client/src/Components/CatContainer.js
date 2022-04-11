import React from 'react'
import CatCardsAll from './CatCardsAll';
import CatsSingle from './CatCardOne';
import NewCatForm from './CatAddForm';

function CatContainer({catsArray, currentUser, handleChangeToMyCats}) {
  console.log(currentUser)
  
  // const catsByUser = catsArray.filter(cat => {
  //   if (currentUser.id === cat.user_id) {
  //     return cat
  //   } else {
  //     return cat
  //   }
  // })
  // console.log(currentUser.id)
  // function handleDelete(id){
  //   const byebyeCat = catsArray.filter(cat => cat.id !==id)
  //   setCatsArray(byebyeCat)
  //   history.push('/cats')
  // }

  // function handleCatUpdate(updatedCat) {
  //   const updatedCats = catsArray.map(originalCat => 
  //     originalCat.id === updatedCat.id ? updatedCat : originalCat
  //     );
  //     setCatsArray(updatedCats)
  // }

  const catCards = catsArray.map((cat) => (
    <CatCardsAll
      key={cat.id}
      cat={cat}
      currentUser={currentUser}
    />
  ));

  return (
    <div className="catContainer">
      <div className="myCats">
        <button onClick={handleChangeToMyCats}>My Cats</button>
      </div>
      {catCards}
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