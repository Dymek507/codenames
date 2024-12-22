import cardImages from '../assets'
import { CardImages } from '../assets'

interface CardFrontProps {
  color: string
}

const CardFront = ({ color }: CardFrontProps) => {
  return (
    <div className='w-full h-full bg-center bg-cover ' style={{ backgroundImage: `url(${cardImages[color as keyof CardImages]})` }}></div>
  )
}

export default CardFront