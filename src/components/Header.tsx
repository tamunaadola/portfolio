import { AppBar, Button, Toolbar, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <AppBar
      position='sticky'
      sx={{
        mb: 3,
        background: 'none',
        boxShadow: 0,
        backdropFilter: 'blur(2px)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', p: 0 }}>
        <Stack direction='row' spacing={1}>
          <Link to='/'>
            <Button color='inherit'>About</Button>
          </Link>
          <Link to='/portfolio'>
            <Button color='inherit'>Portfolio</Button>
          </Link>
        </Stack>
        <Typography
          component='h1'
          color='error.dark'
          sx={{
            fontSize: {
              xs: '14px',
              sm: '30px',
              md: '48px',
            },
            fontWeight: 'bold',
          }}
        >
          NIKA KARUMIDZE
        </Typography>
        <Stack direction='row' spacing='25%'>
          <a href='https://www.linkedin.com/in/nika-karumidze/' target='blank'>
            <LinkedInIcon sx={{ fontSize: { xs: '28px', sm: '40px' } }} />
          </a>
          <a href='https://github.com/nikakarumidze' target='blank'>
            <GitHubIcon sx={{ fontSize: { xs: '28px', sm: '40px' } }} />
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
