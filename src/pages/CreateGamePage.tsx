import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

import React from 'react'
import { useAppDispatch } from '../store/app/hooks';
import { sendBoardData } from '../store/gameActions';

const CreateGamePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createGameHandler = () => {
    dispatch(sendBoardData('blue'));
    navigate("/master");

  }
  return (
    <div className='h-full flex-center'>
      <div className='bg-sky-900 w-5/6 h-5/6 flex-center' >
        <Button onClick={createGameHandler} variant='contained' size='large' sx={{ fontSize: 40 }}>Stwórz grę</Button>
      </div>
    </div>
  )
}

export default CreateGamePage