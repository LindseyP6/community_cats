import React, {useEffect, useState} from 'react';
import {useParams, Link, useHistory} from 'react-router-dom';
import EditCatModal from './EditCatModal';
import Comments from './Comments';

function CatCardOne({handleCatUpdate, handleDelete, currentUser}) {
  const [cat, setCat] = useState({});
  const [show, setShow] = useState(false);
  const history = useHistory();
  const {id} = useParams()
  
  useEffect(() => {
    fetch(`/cats/${id}`)
        .then(r => r.json())
        .then(cat => setCat(cat));
      }, [id])


  function handleDeleteFromDatabase(){
    fetch(`/cats/${id}`, {
      method: "DELETE",
    })
  }

  function handleDeleteClick(){
      handleDelete(id)
      handleDeleteFromDatabase()
  }

  function handleModalClick(){
      setShow(true)
  }

  const {name, image, description, tnr_status, temperament, gender, human_name, trap_date, tnr_date, special_notes } = cat;
  return (
    <div id="singleCatPage">
      <div className="linkBack">
        <Link to={`/home`}>
          <button className="allButtons">All Cats</button>
        </Link>
      </div>
      <h1>{name}</h1>
      <div id="singleCatCard">
        <img className="singleCatImg" src={image} alt={name} />
        <div className="singleCatDetails">
          <p>
            <strong>Gender: </strong>
            {gender}
          </p>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Temperment: </strong>
            {temperament}
          </p>
          <p>
            <strong>TNR Status: </strong> {tnr_status}
          </p>
          <p>
            <strong>TNR Date: </strong> {tnr_date}
          </p>
          <p>
          <p>
            <strong>Trap Date: </strong> {trap_date}
          </p>
            <strong>Special Notes: </strong>
            {special_notes}
          </p>
          <p>
            <strong>Human Caretaker: </strong>
            {human_name}
          </p>

          {currentUser.id === cat.user_id ? (
            <div>
              <button className="allButtons" onClick={handleDeleteClick}>
                Remove Cat
              </button>

              <button className="allButtons" onClick={handleModalClick}>
                Edit Cat
              </button>
              <EditCatModal
                onClose={() => setShow(false)}
                handleCatUpdate={handleCatUpdate}
                show={show}
              />
            </div>
          ) : null}
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default CatCardOne