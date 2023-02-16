import React from 'react'
import './Card.css'

export default function Card(props) {

  return (
    <div className="card">
      <img className='card__image' src={props.image} alt={props.title} />
      <h3 className='card__title'>{props.title}</h3>
      <p className='card__description'>{props.description}</p>
    </div>
  )
}
