import { Box, CardMedia, Divider, Typography, Grid } from '@mui/material';
import aboutPic from '../assets/about.jpg';

const About = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h3' component='h2' sx={{ color: 'white', mb: 3 }}>
        About
      </Typography>
      <Divider sx={{ backgroundColor: '#808080', my: 2 }} />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' sx={{ color: 'white' }}>
            Hello, I am Nika. I have started my journey into Front-end field
            more than a year ago. Before that, I was studying Business
            Administration, but after taking closer look into programming, I
            have found myself in it.
          </Typography>
          <br />
          <Typography variant='h6' sx={{ color: 'white' }}>
            My primary interests are creating Front-end applications with React
            / Typescript and solving algorithms sometimes.
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <CardMedia
            component='img'
            image={aboutPic}
            sx={{ width: '50%' }}
          ></CardMedia>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: '#808080', my: 2 }} />
    </Box>
  );
};

export default About;
