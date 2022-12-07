import { Box } from '@mui/material';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useNavigate } from 'react-router-dom';
import Profile from '../assets/profile.png';

export const AboutMe = () => {
  const navigate = useNavigate();
  let User = localStorage.getItem('User');
  !User && navigate('/Login');

  return (
    <Box sx={{flexGrow:1}}>
      <img src={Profile} alt='perfil' width={1000} />
    </Box>
  );
};
