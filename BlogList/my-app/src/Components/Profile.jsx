import React from 'react'
import { useParams } from 'react-router-dom';

export default function Profile(props) {

    const { user } = props;

    const { id } = useParams();

    const profile = user.find((profile) => profile.id === parseInt(id));

    if (!profile) return <pre>L'utilisateur est introuvable</pre>

  return (
    <div className='profile-card__page'>       
        <h1 className='profile-card__username'>{profile.username}</h1>
        <p className='profile-card__email'>{profile.email}</p>
        <img className='profile-card__avatar' src={profile.avatar} alt={profile.username} />        
    </div>
  );
}
