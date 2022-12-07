import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AppBarMenu = ({ inputSearch }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate('/Login');
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.clear();
    navigate('/Login');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
  );

  return location.pathname !== '/Login' ? (
    <Box sx={{ flexGrow: 1, bgColor: 'red' }}>
      <AppBar position='static'>
        <Toolbar>
          {location.pathname === '/AboutMe' ? (
            <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' onClick={() => navigate('/')} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          ) : null}

          <Typography variant='h6' noWrap sx={{ display: { xs: 'none', sm: 'flex' }, width: 200, mr: 5 }}>
            ACharryN
          </Typography>

          <SearchBar inputSearch={(e: string) => inputSearch(e)} />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <IconButton size='large' edge='end' aria-label='account of current user' aria-controls={menuId} aria-haspopup='true' onClick={handleProfileMenuOpen} color='inherit'>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  ) : null;
};
