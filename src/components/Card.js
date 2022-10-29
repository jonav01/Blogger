import React from 'react'
import './Card.css';
function Card({heading , content , classStyle}) {
  return (
    <div className={`${classStyle} cards`}>
          <h1 className="cardsHeading">{heading}</h1>
          <p className='cardsContent'>{content}</p>
        </div>
  )
}



export default Card