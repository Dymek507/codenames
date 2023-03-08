import React from 'react'
import cardImages from '../assets'
import { CardImages } from '../assets'

interface CardFrontProps {
  color: string
}

const CardFront = ({ color }: CardFrontProps) => {
  return (
    <div className='w-full h-full bg-cover bg-center rounded-2xl shadow-xl' style={{ backgroundImage: `url(${cardImages[color as keyof CardImages]})` }}></div>
  )
}

export default CardFront