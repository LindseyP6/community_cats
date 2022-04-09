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
  const mapboxAccessToken="pk.eyJ1IjoibGluZHNpc3JhZGQiLCJhIjoiY2wxcWtxMzFzMHFpcDNjb2hkN2l6ajM5ZiJ9.-v98V2229SPrGSzrzMoQUQ"
  const history = useHistory();

  useEffect(()=>{
    fetch("/cats")
    .then(r => r.json())
    .then(setCatsArray)
  }, [])

  function onAddCatForm(newCat) {
    setCatsArray([newCat, ...catsArray])
  }


  function handleCatUpdate(updatedCat) {
    const updatedCats = catsArray.map(originalCat => 
      originalCat.id === updatedCat.id ? updatedCat : originalCat
      );
      setCatsArray(updatedCats)
  }

  // function handleDelete(id) {
  //   fetch(`/cats/${id}`, {
  //     method: "DELETE",
  //   }).then((resp) => {
  //     if (resp.ok) {
  //       setCatsArray((cats) =>
  //         cats.filter((cat) => cat.id !== id)
  //       );
  //       setCatsArray(catsArray);
  //       history.push("/cats")
  //     }
  //   });
  // }

  function handleDelete(id){
    const byebyeCat = catsArray.filter(cat => cat.id !==id)
    setCatsArray(byebyeCat)
    history.push('/cats')
  }

  return (
    <div className="App">
      <Header />
      <MapContainer cats={catsArray} mapToken={mapboxAccessToken} />
      
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/cats/:id">
          <CatCardOne handleCatUpdate={handleCatUpdate} handleDelete={handleDelete}/>
        </Route>

        <Route exact path="/new">
          <CatAddForm catsArray={catsArray} onAddCatForm={onAddCatForm} />
        </Route>

        <Route exact path="/cats">
          <CatContainer catsArray={catsArray} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
