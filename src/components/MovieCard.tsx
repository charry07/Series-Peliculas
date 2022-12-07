import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

export interface movieInterface {
  imageURL: string;
  title: string;
  rating: number;
  date: string;
}

export const MovieCard = ({ data }: any) => {

  return (
    <Box sx={{ m:5 }}>
      <Card sx={{ minWidth: 180, borderRadius: 3 }}>
        <CardMedia component='img' image={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
      </Card>
      <Box sx={{ ml: 2, mt: 0.2 }}>
        <Grid item container xs={3.2} justifyContent='center' sx={{ background: 'black', borderRadius: 10 }}>
          <Typography color='white'>{data.vote_average * 10}%</Typography>
        </Grid>
        <Typography variant='h6'>{data.title}</Typography>
        <Typography variant='body2' color='GrayText'>
          {data.release_date}
        </Typography>
      </Box>
    </Box>
  );
};
