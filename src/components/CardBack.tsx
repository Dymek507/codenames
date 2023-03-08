import React from 'react'
import Typography from '@mui/material/Typography';
import { CardImages } from '../assets';

interface CardBackProps {
  word: string,
  color?: string,
  master?: boolean
}

const CardBack = ({ word, color, master }: CardBackProps) => {
  const normalGradient = {
    // backgroundImage: 'conic-gradient(from 90deg at 50% 0%, #06b46d, #08d79b, rgba(13,246,207,1))'
    // background: 'linear-gradient(to right, #38ef7d, #11998e)'

    background: 'linear-gradient(to right, #93F9B9, #1D976C)'

  }


  const gradient = {
    red: {
      // background: 'linear-gradient(to left, #FF4B2B, #FF416C)'

      background: 'linear-gradient(to left, #e35d5b, #e53935)'

    },
    blue: {
      background: 'linear-gradient(to right, #2F80ED, #56CCF2)'
    },
    neutral: {

      // background: 'linear-gradient(to right, #a2ab58, #636363)'

      // background: 'linear-gradient(to right, #F3F9A7, #CAC531)'

      background: 'linear-gradient(to right, #ACBB78, #F7F8F8)'



    },
    killer: {
      background: 'linear-gradient(to right, #434343, #000000)'
    },
  };
  return (
    <div className='w-full h-full rounded-2xl flex-center overflow-hidden shadow-xl p-1'
      style={master ? gradient[color as keyof CardImages] : normalGradient}>
      <p className='text-[2em] rounded-xl' style={{ color: `${color === 'killer' && master ? 'white' : null}` }}>{word}</p>
      {/* <p className='bg-opacity-w px-[0.5em] py-[0.3em] text-[2em] rounded-xl'>{word}</p> */}
    </div>
  )
}

export default CardBack