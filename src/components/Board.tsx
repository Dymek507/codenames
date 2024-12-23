import Grid from '@mui/material/Grid2';
import { useEffect } from 'react'
import FlipCard from './FlipCard'
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from '../firebaseConfig';
import { useAppDispatch, useAppSelector } from '../store/app/hooks'
import { gameActions } from '../store/gameSlice'
import Results from './Results'

interface BoardProps {
  master?: boolean
  displayResults?: boolean
}

const Board = ({ master, displayResults = true }: BoardProps) => {
  const boardData = useAppSelector(state => state.game.board)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "games", "game"), (doc) => {
      if (doc.exists()) {
        dispatch(gameActions.replaceBoard(doc.data().board));
      } else {
        console.error("Document does not exist!");
      }
    }, (error) => {
      console.error("Error fetching document:", error);
    });

    return () => unsub();
  }, [dispatch]);

  return (
    <Grid container className="wh-full">
      <Grid size={{ xs: 12, lg: 9 }} className='p-2 flex-center'>
        <Grid container className=" wh-full">
          {boardData.map((card, index) => (
            <Grid size={{ xs: 12 / 5 }} key={index} className='w-full p-1 flex-center'>
              <FlipCard card={card} master={master} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {displayResults &&
        <Grid size={{ xs: 12, lg: 3 }} className='flex-center'>
          < Results boardData={boardData} />
        </Grid>
      }
    </Grid>
  )
}

export default Board