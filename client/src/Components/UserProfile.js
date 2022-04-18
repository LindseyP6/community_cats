import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import UserCatsList from './UserCatsList';

function UserProfile({currentUser}) {
    const [user, setUser] = useState("")
    const {id} = useParams()

    useEffect(() => {
      fetch(`/users/${currentUser.id}`)
          .then(r => r.json())
          .then(user => setUser(user));
        }, [id])

    const {name, location, how_many_cats, first_tnr_date, first_tnr_cat, first_trap_date, first_trapped_cat, last_tnr_date, last_tnr_cat, last_trap_date, last_trapped_cat } = user;

  return (
    <div className="userProfile">
      <h1>Your Cat Stats!</h1>
      <div className="profileStats">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Total Cats:</strong> {how_many_cats}</p>
        <p><strong>First Cat Trapped:</strong> {first_trapped_cat} on {first_trap_date}</p>
        <p><strong>First Cat TNRed:</strong> {first_tnr_cat} on {first_tnr_date}</p>
        <p><strong>Most Recently TNRed:</strong> {last_tnr_cat} on {last_tnr_date}</p>
        <p><strong>Most Recently Trapped:</strong> {last_trapped_cat} on {last_trap_date}</p>
      </div>
    </div>
  )
}

export default UserProfile