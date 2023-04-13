import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { CardImages } from '../assets';
import { gradients } from '../assets/gradients';

const normalGradient = {
  background: 'linear-gradient(to right, #93F9B9, #1D976C)'
}

interface CardBackProps {
  word: string,
  color?: string,
  master?: boolean
}

const CardBack = ({ word, color, master }: CardBackProps) => {
  const [fontSize, setFontSize] = useState('1.3em')

  const testHeightAdjust = (word: string) => {
    if (word.length <= 4) {
      setFontSize('2.2em')
    } else if (word.length > 4 && word.length < 8) {
      setFontSize('2em')
    } else if (word.length >= 8 && word.length <= 11) {
      setFontSize('1.6em')
    } else {
      setFontSize('1.2em')
    }
  }

  useEffect(() => {
    testHeightAdjust(word)
  }, [word])


  return (
    <div className='w-full h-full lg:text-[1.2em] rounded-2xl flex-center overflow-hidden shadow-xl p-1'
      style={master ? gradients[color as keyof CardImages] : normalGradient}>
      <p className='font-bold rounded-xl' style={{ color: `${color === 'killer' && master ? 'white' : null}`, fontSize: fontSize }}>{word}</p>
    </div>
  )
}

export default CardBack