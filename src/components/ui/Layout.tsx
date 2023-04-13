import React from 'react'
import { Outlet } from 'react-router-dom'
import Drawer from './Drawer'

import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '../../store/app/hooks';
import { uiActions } from '../../store/uiSlice';



const Layout = () => {
  const dispatch = useAppDispatch()

  const toggleHandler = () => {
    dispatch(uiActions.toggle(true))
  }


  return (
    <div className='w-screen h-screen realtive'>
      <div className='absolute z-10 text-6xl text-white cursor-pointer flex-center w-14 h-14 inset-2' onClick={toggleHandler}><MenuIcon fontSize='inherit' /></div>
      <Drawer />
      <Outlet />
    </div>
  )
}

export default Layout