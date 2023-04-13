import React from 'react'
import { CardT } from '../types/modelTypes'
import { gradients } from '../assets/gradients';
import { CardImages } from '../assets';

interface ResultProps {
  boardData: CardT[];
  color: string
}

const Result = ({ boardData, color }: ResultProps) => {

  const resultHandler = (color: string) => {
    const cardInColorArray = boardData.filter(card => card.color === color)
    const cardQuantity = cardInColorArray.length
    const teamPoints = cardInColorArray.filter(card => card.front === true).length

    return [teamPoints, cardQuantity]
  }
  const [teamPoints, cardQuantity] = resultHandler(color)


  return (
    <div className='flex-center h-[7em] w-[20em] bg-sky-900 rounded-xl shadow-lg text-black' style={gradients[color as keyof CardImages]}>
      <p className='text-[3em]' style={{ color: `${color === 'killer' ? 'white' : null}` }}>
        {teamPoints + "/" + cardQuantity}
      </p>
      <p className='text-[3em] ml-2' style={{ color: `${color === 'killer' ? 'white' : null}` }}>
        {color}
      </p>
    </div>
  )
}

export default Result