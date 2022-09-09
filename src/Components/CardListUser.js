import React from 'react'
import CardUser from './Card'


const CardListUser = ({reviews,setIndex}) => {
  return (
    <div style={{width:'30%'}}>{reviews.map((review,i)=> <CardUser setIndex={setIndex} ind={i} review={review} />)}</div>
  )
}

export default CardListUser