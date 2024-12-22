import { Button, Switch } from '@mui/material'
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from '../store/app/hooks';
import { sendBoardData } from '../store/gameActions';
import { useState } from 'react';


const CreateGamePage = () => {

  const [color, setColor] = useState('blue');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createGameHandler = (twoPlayers: boolean, color: string, database: string) => {
    dispatch(sendBoardData(twoPlayers, color, database));
    navigate("/master");
  }
  return (
    <div className='h-full flex-center'>
      <div className='flex-col w-5/6 space-y-4 h-5/6 flex-center'>
        <div className='flex items-center space-x-4'>
          <span>Red</span>
          <Switch
            checked={color === 'blue'}
            onChange={(e) => setColor(e.target.checked ? 'blue' : 'red')}
            color="primary"
          />
          <span>Blue</span>
        </div>
        <div className='flex items-center space-x-4'>
          <span>Database:</span>
          <Select
            value={database}
            onChange={(e) => setDatabase(e.target.value)}
            className='p-2 border rounded'
          >
            <MenuItem value="klasyczna">Klasyczna</MenuItem>
            <MenuItem value="ai">AI</MenuItem>
            <MenuItem value="wszystko">Wszystko</MenuItem>
          </Select>
        </div>
        <div className='flex space-x-4'>
          <Button variant='outlined' size='large' sx={{ fontSize: 20 }} onClick={() => createGameHandler(true, color, "original")}>Mode 1</Button>
          <Button variant='outlined' size='large' sx={{ fontSize: 20 }}>Mode 2</Button>
          <Button variant='outlined' size='large' sx={{ fontSize: 20 }}>Mode 3</Button>
          <Button variant='outlined' size='large' sx={{ fontSize: 20 }}>Mode 4</Button>
          <Button variant='outlined' size='large' sx={{ fontSize: 20 }}>Mode 5</Button>
        </div>
        <Button onClick={createGameHandler} variant='contained' size='large' sx={{ fontSize: 40 }}>Stwórz grę</Button>
      </div>
    </div>
  )
}

export default CreateGamePage