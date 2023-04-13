import React from 'react'
import { CardT } from '../types/modelTypes'
import Result from './Result'

interface ResultsProps {
  boardData: CardT[]
}

const Results = ({ boardData }: ResultsProps) => {

  return (
    <div className='flex flex-col items-center justify-start h-full w-full pt-10 gap-10 text-[0.5em] lg:text-[1em]'>
      <Result boardData={boardData} color={'red'} />
      <Result boardData={boardData} color={'blue'} />
      <Result boardData={boardData} color={'neutral'} />
      <Result boardData={boardData} color={'killer'} />
    </div>
  )
}

export default Results