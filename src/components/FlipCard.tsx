import React, { useState } from 'react'
import { CardT } from '../types/modelTypes'
import { useAppDispatch } from '../store/app/hooks'
import { updateCardData } from '../store/gameActions'
import { gameActions } from '../store/gameSlice'
import CardBack from './CardBack'


import Card from './CardFront'
import CardFront from './CardFront'

interface FlipCardProps {
  card: CardT;
  master?: boolean;
}

const FlipCard = ({ card, master }: FlipCardProps) => {
  const dispatch = useAppDispatch()
  const clickHandler = () => {
    dispatch(gameActions.toggleCard(card.id))
    dispatch(updateCardData())


  }

  return (
    <div className='h-full aspect-[3/2] bg-transparent cursor-pointer group perspective text-[1em]' onClick={clickHandler}>
      <div className='relative preserve-3d w-full h-full duration-1000 ' style={{ transform: `${card.front ? 'rotateY(180deg)' : 'rotateY(0deg)'}` }}>
        <div className='absolute backface-hidden w-full h-full duration-1000 flex-center' >
          <CardBack word={card.word} color={card.color} master={master} />
        </div>
        <div className='absolute backface-hidden w-full h-full overflow-hidden duration-1000 my-rotate-y-180' >
          <CardFront color={card.color} />
        </div>

      </div>
    </div>
  )
}

export default FlipCard