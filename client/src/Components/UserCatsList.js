import React from 'react';
import {Link} from 'react-router-dom';

function UserCatsList({catsArray, currentUser}) {

const myCats = catsArray.filter(cat => cat.user_id === currentUser.id)

  return (
    <div>
        <h1>My Cats</h1>
        <div className="myCatsContainer">
            {myCats.map(cat => {
            return (
            <div className="myCats">
                <img src={cat.image} alt={cat.name}/>
                <h2>{cat.name}</h2>
                <p><strong>Gender: </strong>{cat.gender}</p>
                <p><strong>Description: </strong>{cat.description}</p>
                <p><strong>Temperment: </strong>{cat.temperament}</p>
                <p><strong>TNR Status: </strong>{cat.tnr_status}</p>
                <p><strong>Trap Date: </strong>{cat.trap_date}</p>
                <p><strong>TNR Date: </strong>{cat.tnr_date}</p>
                <p><strong>Human Caretaker: </strong>{cat.human_name}</p>
                <Link to={`/cats/${cat.id}`}>
                    <button className="allButtons">Edit Cat Details</button>
                </Link>  
            </div>)
        })
        }
        </div>
  </div>
  )
}

export default UserCatsList