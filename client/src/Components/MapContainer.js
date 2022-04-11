import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Map, { Marker, Popup, NavigationControl, FullscreenControl} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from "react-map-gl-geocoder";
import { IoLogoOctocat } from "react-icons/io";

// import { FaCat } from "react-icons/fa";
// import { GiCat } from "react-icons/gi";

function MapContainer({cats, mapToken}) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 40.611401,
    longitude: -74.005630,
    zoom: 15,
    height: "50vh",
    width: "50vw",
  });

  const fullscreenControlStyle = {
    top: 10,
    right: -2,
  };

  const navStyle = {
    top: 10,
    left: 11,
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
    <div className="map">
    <Map
      className="mapBox"
      {...viewport}
      mapboxApiAccessToken={mapToken}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/lindsisradd/cl19txpq1000p14nxnyystcsl"
    >
      {cats?.map((cat) => (
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
            <IoLogoOctocat className="markerIcon"/>
          </button>
        </Marker>
      ))}
      <div className="popUpDiv">   
        {selectedCat ? (
          <Popup
            latitude={selectedCat.latitude}
            longitude={selectedCat.longitude}
            onClose={()=>setSelectedCat(null)}
          >
            <div className="popUpContent">
              <h3>{selectedCat.name}</h3>
              <li><strong>Temperament: </strong>{selectedCat.temperament}</li>
              <li><strong>Caretaker: </strong> {selectedCat.human_name}</li>
              <li><Link to={`/cats/${selectedCat.id}`}>See Details</Link></li>
            </div>
          </Popup>
        ) : null}
      </div>
      <NavigationControl style={navStyle}/>
      <FullscreenControl style={fullscreenControlStyle}/>
    </Map>
  </div>
  )
}

export default MapContainer