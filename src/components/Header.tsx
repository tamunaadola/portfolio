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
        px: 0,
        background: 'none',
        boxShadow: 0,
        backdropFilter: 'blur(40px)',
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
              xs: '12px',
              sm: '30px',
              md: '48px',
            },
            fontWeight: 'bold',
          }}
        >
          TAMUNA ADOLASHVILI
        </Typography>
        <Stack direction='row'>
          <a href='https://www.linkedin.com/in/tamuna-adolashvili-95b04a270/' target='blank'>
            <LinkedInIcon sx={{ fontSize: { xs: '28px', sm: '40px' } }} />
          </a>
          <a
            href='https://github.com/tamunaadola'
            target='blank'
            style={{ marginLeft: '10px' }}
          >
            <GitHubIcon sx={{ fontSize: { xs: '28px', sm: '40px' } }} />
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
