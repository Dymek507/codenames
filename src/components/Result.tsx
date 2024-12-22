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
    <div className='flex-center h-[7rem] w-[16rem] bg-sky-900 rounded-xl shadow-lg text-black' style={gradients[color as keyof CardImages]}>
      <p className='text-3xl' style={{ color: `${color === 'killer' ? 'white' : 'white'}` }}>
        {teamPoints + "/" + cardQuantity}
      </p>
      <p className='ml-2 text-3xl' style={{ color: `${color === 'killer' ? 'white' : 'white'}` }}>
        {color}
      </p>
    </div>
  )
}

export default Result