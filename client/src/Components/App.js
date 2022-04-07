import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
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

  useEffect(()=>{
    fetch("/cats")
    .then(resp => resp.json())
    .then(setCatsArray)
  }, [])

  function onAddCatForm(newCat) {
    setCatsArray([newCat, ...catsArray])
  }

  return (
    <div className="App">
      <Header />
      {/* <CatContainer catsArray={catsArray} /> */}

      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/cats/:id">
          <CatCardOne/>
        </Route>

        <Route exact path="/new">
          <CatAddForm catsArray={catsArray} onAddCatForm={onAddCatForm}/>
        </Route>

        <Route exact path="/cats">
          <CatContainer catsArray={catsArray} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
