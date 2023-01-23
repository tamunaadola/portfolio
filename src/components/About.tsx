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
        <Grid item>
          <CardMedia component='img' image={aboutPic} sx={{width:'50%'}}></CardMedia>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Divider sx={{ backgroundColor: '#808080', my: 2 }} />
    </Box>
  );
};

export default About;
