import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';


const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'#fff'}
        variant='h6'
        component='div'
        sx={{ my: 2 }}
      >
        <h2 ><NavLink style={{ textDecoration: 'none', color: 'black' }} activeClassName='active' to={'/'}>Data Solutions</NavLink></h2>
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <NavLink to={'/services'}>Solutions & Services</NavLink>
        </li>
        <li>
          <NavLink to={'/partners'}>Partners & Products</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>Research</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>Our Vision</NavLink>
        </li>
        <li>
          <NavLink to={'/careers'}>Careers</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact Us</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'white' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'black'}
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              <h2 ><NavLink style={{ textDecoration: 'none', color: 'black' }} activeClassName='active' to={'/'}>Data Solutions</NavLink></h2>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                {/* The infrastructure we provide with the best designed software for your product in the whole world.
                Zero Trust
                End Point
                We aspire to Provide the service on tools and security protection. */}
                <li>
                  <NavLink to={'/services'}>Solutions & Services</NavLink>
                </li>
                {/* Aspiration to provide the suitable product and partners with work as a official vendors for MSSP  */}
                <li>
                  <NavLink to={'/partners'}>Partners & Products</NavLink>
                </li>
                {/* Our company policy is to research more for us clients and provide the protection tools that will be good matching */}
                <li>
                  <NavLink to={'/about'}>Research</NavLink>
                </li>
                {/* Simple and to keep the organization clean with protection to provide one shop with the best of best */}
                <li>
                  <NavLink to={'/about'}>Our Vision</NavLink>
                </li>
                {/* apply with us on providing the staffing solution with the clients and Partners and with us */}
                <li>
                  <NavLink to={'/careers'}>Careers</NavLink>
                </li>
                {/* For Demo, information, trial in our products and question, and Help  */}
                <li>
                  <NavLink to={'/contact'}>Contact Us</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
