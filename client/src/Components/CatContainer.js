import React from 'react'
import CatCardsAll from './CatCardsAll';
import FilterCats from './FilterCats';
// import NewCatForm from './CatAddForm';

function CatContainer({catsArray, currentUser, handleChangeToMyCats, setSearchTerm, searchTerm}) {
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

  // function handleChangeToAllCats(){
  //   handleChangeToMyCats(!handleChangeToMyCats)
  // }

  const catCards = catsArray.map((cat) => (
    <CatCardsAll
      key={cat.id}
      cat={cat}
      currentUser={currentUser}
    />
  ));

  // function handleChangeToMyCats(){
  //   const myCatsList = catsArray.filter(cat => currentUser.id === cat.user_id)
  //   setCatsArray(myCatsList)
  // }
  //const filteredCats= catsArray.filter(cat => currentUser.id === cat.user_id).map(filteredCat => <CatCardsAll />) 
  // function handleChangeToMyCats(){
  //   const myCatsList = catsArray.filter(cat => currentUser.id === cat.user_id)
  //   setCatsArray(myCatsList)
  // }

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