import React from 'react'
import { Link } from 'react-router-dom';

export default function ProfileDetails(props) {

    const { user } = props;

    return (
        <div className="profile-container">
            {user.map((profile, index) => {
                return <Link to={`/profile/${profile.id}`} className='profile-card' key={index}>
                    <h1 className="profile-card__username">{profile.username}</h1>
                    <p className="profile-card__email">{profile.email}</p>
                    <img className="profile-card__avatar" src={profile.avatar} alt="avater du profil" />
                </Link>
            })           
            }
        </div>
  )
}
