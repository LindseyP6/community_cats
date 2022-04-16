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

    const {name, how_many_cats, first_tnr_date, first_tnr_cat, first_trap_date, first_trapped_cat} = user;

  return (
    <div>
        <h1>Your Cat Stats!</h1>
        <p><strong>Your name:</strong> {name}</p>
        <p><strong>Total Cats:</strong> {how_many_cats}</p>
        <p><strong>First Cat Trapped:</strong> {first_trapped_cat} on {first_trap_date}</p>
        <p><strong>First Cat TNRed:</strong> {first_tnr_cat} on {first_tnr_date}</p>
        {/* <UserCatsList /> */}
    </div>
  )
}

export default UserProfile