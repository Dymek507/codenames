import * as React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppDispatch, useAppSelector } from '../../store/app/hooks';
import { uiActions } from '../../store/uiSlice';



const menuList = [
  {
    id: 1,
    title: 'Home',
    link: "/"
  },
  {
    id: 2,
    title: 'Stwórz grę',
    link: "/create"
  },
  {
    id: 3,
    title: 'Kapitan',
    link: "/master"
  },
  {
    id: 4,
    title: 'Widok',
    link: "/view"
  },
]

export default function Drawer() {
  const openMenu = useAppSelector(state => state.ui.menuOpen)

  const dispatch = useAppDispatch()

  const toggleDrawer = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    dispatch(uiActions.toggle(state))
  };
  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={openMenu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className="text-[10px] lg:text-[0.8em]"
        sx={{
          '& .MuiDrawer-paper': {
            width: '20em',
            height: '34em',
            color: 'white',
            mt: { xs: '1em', md: '12em' },
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0 50px 50px 0',
            backgroundImage: 'linear-gradient(0deg, rgba(70,0,94,1) 0%, rgba(117,1,72,1) 53%, rgba(158,59,62,1) 100%)'
          }
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List >
            {menuList.map(({ id, title, link }) => (

              <Link key={id} to={link} >
                <ListItem disablePadding sx={{
                  '& span': {
                    fontSize: '2em',
                    color: ' white',
                  },
                  '& svg': {
                    fontSize: '4em',
                    color: ' white',
                  },
                  py: 1

                }}>
                  <ListItemButton>
                    <ListItemIcon >
                      {id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          {/* <Divider /> */}
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </SwipeableDrawer>
    </div >
  );
}