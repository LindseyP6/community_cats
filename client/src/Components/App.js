import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import '../AppStyle.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MapContainer from './MapContainer';
import CatContainer from './CatContainer';

import CatCardOne from './CatCardOne';
import CatAddForm from './CatAddForm';
import UserProfile from './UserProfile';
import UserCatsList from "./UserCatsList";
import FilterCats from './FilterCats';


function App() {
  const [catsArray, setCatsArray] = useState([]);
  // const [catId, setCatId] = useState(null);
  const mapboxAccessToken="pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxcWtxMzFzMHFpcDNjb2hkN2l6ajM5ZiJ9.-v98V2229SPrGSzrzMoQUQ";
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

  const searchCats = catsArray.filter((cat) => {
    return cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    || cat.human_name.toLowerCase().includes(searchTerm.toLowerCase())
    || cat.address.toLowerCase().includes(searchTerm.toLowerCase())
    || cat.tnr_date.includes(searchTerm)
    || cat.trap_date.includes(searchTerm)
    || cat.temperament.toLowerCase().includes(searchTerm.toLowerCase())
    || cat.description.toLowerCase().includes(searchTerm.toLowerCase())
    // || cat.gender.toLowerCase() === 'male'.toLowerCase()
    // || cat.gender.toLowerCase() === 'female'.toLowerCase()
  });

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

  function handleDelete(id){
    const byebyeCat = catsArray.filter(cat => cat.id !== id)
    setCatsArray(byebyeCat)
  }

  // if (currentUser) const myCats = catsArray.filter(cat => currentUser.id === cat.user_id)
  // const myCatsList = catsArray.filter(cat => cat.user_id === currentUser.id)

  //maybe turn this back on
  if (!currentUser) return <Login setCurrentUser={setCurrentUser} />

  return (
    <div className="app">
      <Header 
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}/>

       
      <Switch>

        <Route path="/home">
          <MapContainer
            catsArray={searchCats}  
            mapToken={mapboxAccessToken} />
          <CatContainer 
            catsArray={searchCats} 
            setCatsArray={setCatsArray} 
            currentUser={currentUser} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} />
        </Route>

        <Route path="/user-profile">
          <UserProfile 
            currentUser={currentUser} />
          <UserCatsList 
          catsArray={catsArray}
          currentUser={currentUser} />
        </Route>

        <Route exact path="/cats/:id">
          <CatCardOne 
            catsArray={searchCats} 
            currentUser={currentUser}
            handleCatUpdate={handleCatUpdate} 
            handleDelete={handleDelete}
             />
        </Route>

        <Route exact path="/new">
          <CatAddForm 
            catsArray={searchCats} 
            addNewCat={addNewCat} 
            currentUser={currentUser} />
        </Route>

        <Route path="/">
          <Login 
            setCurrentUser={setCurrentUser} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
