import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Map, { Marker, Popup, NavigationControl, FullscreenControl} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// import Geocoder from "react-map-gl-geocoder";
import { IoLogoOctocat } from "react-icons/io";

function MapContainer({catsArray, mapToken, myCatsList}) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 40.611401,
    longitude: -74.005630,
    zoom: 16,
    height: "75vh",
    width: "80vw",
    padding: "50px"
  });

  const fullscreenControlStyle = {
    top: 10,
    right: 10,
  };

  const navStyle = {
    top: 10,
    left: 10,
  };
  useEffect(() => {
    const listener = (e)=> {
      if (e.key === "Escape") {
        setSelectedCat(null)
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, []);

  return (
    <div id="map">
    <Map
      className="mapBox"
      {...viewport}
      mapboxApiAccessToken={mapToken}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/lindsisradd/cl19txpq1000p14nxnyystcsl"
    >
      {catsArray?.map((cat) => (
        <Marker
          key={cat.id}
          latitude={cat.latitude}
          longitude={cat.longitude}
        >

          <button className="mapButton"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCat(cat);
            }}
          >
          {/* <img width="30px" height="30px" className="markerIcom" src={cat.image} alt = "skatepark icon"/> */}
            <IoLogoOctocat className="markerIcon"/>
          </button>
        </Marker>
      ))}
      <div>   
        {selectedCat ? (
          <Popup
            latitude={selectedCat.latitude}
            longitude={selectedCat.longitude}
            onClose={()=>setSelectedCat(null)}
            className="popUp"
          >
            <div className="popUpContent">
              <h2>{selectedCat.name}</h2>
              <p><img src={selectedCat.image} alt={selectedCat.name} width="180px"/></p>
              <li><strong>Temperament: </strong>{selectedCat.temperament}</li>
              <li><strong>Caretaker: </strong> {selectedCat.human_name}</li>
              <li><Link to={`/cats/${selectedCat.id}`}>See Details</Link></li>
            </div>
          </Popup>
        ) : null}
      </div>
      <div className="mapControllers">
        <NavigationControl style={navStyle}/>
        <FullscreenControl style={fullscreenControlStyle}/>
      </div>
    </Map>
    <div className="pageIntro">
      <h2>Hello friends!</h2>
      <p>
        Welcome to the Community Cat Catalog where local cat rescuers can keep track of the cats in their neighborhood. When you click on a map marker, you can view more details about that cat. Below the map you may also search for cats by a variety of attributes. Viewing an indivual cat's page will allow you to leave a comment about that cat. You can also add a cat and view it directly on the map! Your profile page will show you your Cat Stats and allow you to manage your cats.
      </p>
    </div>
  </div>
  )
}

export default MapContainer