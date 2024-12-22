import { CardT } from '../types/modelTypes'
import Result from './Result'

interface ResultsProps {
  boardData: CardT[]
}

const Results = ({ boardData }: ResultsProps) => {

  return (
    <div className='flex flex-col items-center justify-start w-full h-full gap-10 pt-10 text-sm '>
      <Result boardData={boardData} color={'red'} />
      <Result boardData={boardData} color={'blue'} />
      <Result boardData={boardData} color={'neutral'} />
      <Result boardData={boardData} color={'killer'} />
    </div>
  )
}

export default Results