import React from 'react'
import { Outlet } from 'react-router-dom'
import Drawer from './Drawer'

import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '../../store/app/hooks';
import { uiActions } from '../../store/uiSlice';
import { backgroundSvg } from '../../assets/backgroundSVG'



const Layout = () => {
  const dispatch = useAppDispatch()

  const toggleHandler = () => {
    dispatch(uiActions.toggle(true))
  }


  return (
    <div className='realtive w-screen h-screen'>
      <div className='flex-center w-12 h-12 absolute inset-3 text-6xl text-white' onClick={toggleHandler}><MenuIcon fontSize='inherit' /></div>
      <Drawer />
      <Outlet />
    </div>
  )
}

export default Layout