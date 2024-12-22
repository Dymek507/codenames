import { CardT } from '../types/modelTypes'
import { useAppDispatch } from '../store/app/hooks'
import { updateCardData } from '../store/gameActions'
import { gameActions } from '../store/gameSlice'

import CardBack from './CardBack'
import CardFront from './CardFront'

interface FlipCardProps {
  card: CardT;
  master?: boolean;
}

const FlipCard = ({ card, master }: FlipCardProps) => {
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    if (!master) return
    dispatch(gameActions.toggleCard(card.id))
    dispatch(updateCardData())
  }

  return (
    <div className='w-full aspect-[3/2] bg-transparent cursor-pointer group perspective text-[1rem] rounded-2xl' onClick={clickHandler}>
      <div className='relative w-full h-full duration-1000 preserve-3d' style={{ transform: `${card.front ? 'rotateY(180deg)' : 'rotateY(0deg)'}` }}>
        <div className='absolute w-full h-full duration-1000 backface-hidden flex-center' >
          <CardBack word={card.word} color={card.color} master={master} />
        </div>
        <div className='absolute w-full h-full overflow-hidden duration-1000 backface-hidden my-rotate-y-180' >
          <CardFront color={card.color} />
        </div>

      </div>
    </div>
  )
}

export default FlipCard