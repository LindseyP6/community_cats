import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import '../AppStyle.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MapContainer from './MapContainer';
import CatContainer from './CatContainer';

import CatCardOne from './CatCardOne';
import CatAddForm from './CatAddForm';

import EditCatForm from './EditCatForm';
import FilterCats from './FilterCats';


function App() {
  const [catsArray, setCatsArray] = useState([]);
  const [catId, setCatId] = useState(null);
  const mapboxAccessToken="pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxcWtxMzFzMHFpcDNjb2hkN2l6ajM5ZiJ9.-v98V2229SPrGSzrzMoQUQ"
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("")
// console.log(currentUser, "app")

  useEffect(()=>{
    fetch("/cats")
    .then(r => r.json())
    .then(cats => setCatsArray(cats))
  }, [])

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((currentUser) => setCurrentUser(currentUser))
  }, [])

  // const cat = catsArray.find(c => {
  //   if (catId) {
  //     return c.id === catId
  //   }else {
  //     return {}
  //   }
  // })
  // const searchCats = catsArray.filter((cat) => {
  //   return cat.name.includes(searchTerm)
  //   || cat.human_name.includes(searchTerm)
  //   || cat.address.includes(searchTerm);
  // });

    function addNewCat(newCat) {
    setCatsArray(catsArray => {
      return[...catsArray, newCat]
    })
  }

  function handleCatUpdate(updatedCat) {
    const updatedCats = catsArray.map(originalCat => 
      originalCat.id === updatedCat.id ? updatedCat : originalCat
      );
      setCatsArray(updatedCats)
  }

  function handleChangeToMyCats(){
    const myCatsList = catsArray.filter(cat => currentUser.id === cat.user_id)
    setCatsArray(myCatsList)
  }

  function handleDelete(id){
    const byebyeCat = catsArray.filter(cat => cat.id !== id)
    setCatsArray(byebyeCat)
  }


  //maybe turn this back on
  if (!currentUser) return <Login setCurrentUser={setCurrentUser} />

  return (
    <div className="app">
      <Header 
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}/>

      <MapContainer
        // catsArray={searchCats} 
        catsArray={catsArray} 
        mapToken={mapboxAccessToken} />
      
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>

        <Route exact path="/cats/:id">
          <CatCardOne 
            // cat={cat}
            // catsArray={searchCats} 
            handleCatUpdate={handleCatUpdate} 
            handleDelete={handleDelete} />
        </Route>

        <Route exact path="/new">
          <CatAddForm 
            // catsArray={searchCats} 
            catsArray={catsArray}
            addNewCat={addNewCat} 
            currentUser={currentUser} />
        </Route>

        <Route exact path="/cats">
          <CatContainer 
            // catsArray={searchCats} 
            catsArray={catsArray}
            currentUser={currentUser} 
            handleChangeToMyCats={handleChangeToMyCats} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
