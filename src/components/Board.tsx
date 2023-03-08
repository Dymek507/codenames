import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { CardT } from '../modules/modelTypes'
import Card from './CardFront'
import FlipCard from './FlipCard'
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from '../firebaseConfig';
import { useAppDispatch, useAppSelector } from '../store/app/hooks'
import { gameActions } from '../store/gameSlice'
import { updateCardData } from '../store/gameActions'

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
        console.log('update')
      }
    });
  }, []);

  return (
    <div className='flex-center h-full lg:p-8 text-xl'>
      <div className='h-full aspect-[3/2] p-1 lg:p-8 rounded-2xl'>
        <Grid container spacing={1} className="w-full h-full">
          {boardData.map(card => <Grid key={card.id} item xs={2.4} className=' flex-center'>
            <FlipCard card={card} master={master} />
          </Grid>)}
        </Grid>
      </div>
    </div>
  )
}

export default Board