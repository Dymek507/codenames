import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { CardT } from '../types/modelTypes'
import Card from './CardFront'
import FlipCard from './FlipCard'
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from '../firebaseConfig';
import { useAppDispatch, useAppSelector } from '../store/app/hooks'
import { gameActions } from '../store/gameSlice'
import { updateCardData } from '../store/gameActions'
import Results from './Results'

interface BoardProps {
  master?: boolean
}

const Board = ({ master }: BoardProps) => {
  const boardData = useAppSelector(state => state.game.board)

  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "games", "game"), (doc) => {
      if (doc.exists()) {
        dispatch(gameActions.replaceBoard(doc.data().board))
      }
    });
  }, []);

  return (
    <div className='flex h-full text-[10px] '>
      <div className='w-full h-full'></div>
      <div className='h-full flex-center lg:p-4 lg:text-2xl'>
        <div className='h-full aspect-[3/2] p-1 lg:p-2 rounded-2xl'>
          <Grid container spacing={1} className="w-full h-full">
            {boardData.map(card => <Grid key={card.id} item xs={2.4} className=' flex-center'>
              <FlipCard card={card} master={master} />
            </Grid>)}
          </Grid>
        </div>
      </div>
      <Results boardData={boardData} />
    </div>
  )
}

export default Board