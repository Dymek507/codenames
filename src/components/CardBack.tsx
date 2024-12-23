//@ts-nocheck
import { useEffect, useState } from 'react'
import { gradients } from '../assets/gradients';
import '../components/styleCardBack.css'



interface CardBackProps {
  word: string,
  color?: string,
  master?: boolean
}

const CardBack = ({ word, color, master }: CardBackProps) => {
  const [fontSize, setFontSize] = useState('1.3em')

  const testHeightAdjust = (word: string) => {
    if (word.length <= 4) {
      setFontSize('2rem')
    } else if (word.length > 4 && word.length < 8) {
      setFontSize('1.8rem')
    } else if (word.length >= 8 && word.length <= 11) {
      setFontSize('1.6rem')
    } else {
      setFontSize('1.3rem')
    }
  }

  useEffect(() => {
    testHeightAdjust(word)
  }, [word])

  const cardStyle = master ? gradients[color as keyof typeof gradients] : { background: null };

  return (
    <div
      className={`w-full h-full lg:text-[1.2em] flex-center overflow-hidden background border-4 border-white`}
      style={cardStyle}
    >
      <p className='font-bold uppercase rounded-xl' style={{ color: color === 'killer' && master ? 'white' : undefined, fontSize: fontSize }}>{word}</p>
    </div>
  );
};

export default CardBack