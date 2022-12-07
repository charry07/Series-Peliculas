import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from '../components';

export const ContentSite = ({ inputSearch }: any) => {
  const [data, setData] = useState([] as any);
  const API_KEY: string = '029ef3a840e0aeb020ada6bdf2f494a4';
  const URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const URLsearch: string = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputSearch}`;
  const navigate = useNavigate();
  let User = localStorage.getItem('User');
  !User && navigate('/Login');

  useEffect(() => {
    try {
      axios.get(inputSearch ? URLsearch : URL).then(({ data }) => setData(data.results));
    } catch (error) {
      console.log(error);
    }
    return () => {};
  }, [inputSearch]);

  return User ? (
    <Box>
      <Typography variant='h3' sx={{ m: 1 }}>
        Peliculas
      </Typography>
      <Grid container>
        {data?.map((item: any) => (
          <Grid item xs={12} sm={4} xl={2} key={item.id}>
            <MovieCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : null;
};
