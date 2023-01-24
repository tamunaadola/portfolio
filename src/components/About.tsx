import { CardMedia, Divider, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import aboutPic from '../assets/about.jpg';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'Bootstrap',
    'Javascript',
    'Typescript',
    'jQuery',
    'JSON',
    'React',
    'React Router DOM',
    'Rest API',
    'fetch',
    'axios',
    'Context API',
    'styled Components',
    'CSS Modules',
    'Material UI',
    ' Jest & React Testing Library',
    'Data Structures & Algorithms',
  ];
  return (
    <>
      <Typography
        variant='h3'
        component='h2'
        textAlign='center'
        sx={{ color: 'white', mb: 2 }}
      >
        About Me
      </Typography>
      <Divider sx={{ backgroundColor: '#808080', mb: 4 }} />
      <Grid container sx={{ px: 1 }}>
        <Grid item xs={12} sm={6}>
          <Grid container justifyContent='space-around' sx={{ height: '100%' }}>
            <Grid item>
              <Typography variant='h6' sx={{ color: 'white' }}>
                Hello, I am Nika. I started my journey into the Front-end field
                more than a year ago. Before that, I was studying Business
                Administration, but after taking a closer look into programming,
                I have found myself in it.
              </Typography>
              <br />
              <Typography variant='h6' sx={{ color: 'white' }}>
                My primary interests are creating Front-end applications with
                React / Typescript and solving algorithms sometimes.
              </Typography>
            </Grid>
            <Grid item sx={{ my: { xs: 4, md: 0 } }}>
              <Link to='/portfolio'>
                <Button
                  variant='outlined'
                  size='large'
                  color='error'
                  disableFocusRipple
                  sx={{
                    width: '100%',
                    fontWeight: 'bold',
                    fontSize: { xs: '22px', md: '34px' },
                  }}
                >
                  Go to Portfolio
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent='center'>
          <CardMedia
            component='img'
            image={aboutPic}
            sx={{
              minWidth: '50%',
              maxWidth: { xs: '100%', md: '50%' },
              borderRadius: '12px',
            }}
          ></CardMedia>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: '#808080', my: 2 }} />
      <Typography
        variant='h4'
        component='h3'
        sx={{ my: 2, mx: 1, color: 'white' }}
      >
        Primary Skillset:
      </Typography>
      <Grid container justifyContent='space-evenly' mx={1}>
        {skills.map((item, index) => (
          <Grid
            key={index}
            container
            item
            xs={4}
            sm={3}
            md={2}
            p={1}
            m={1}
            justifyContent='center'
            alignContent='center'
            sx={{
              backgroundColor: '#181818',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '5px',
              width: '100%',
            }}
          >
            <Typography textAlign='center'>{item}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default About;
