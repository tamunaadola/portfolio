import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { content } from './portfolioContent';
import LinkIcon from '@mui/icons-material/Link';
import Grid from '@mui/material/Grid';

const Portfolio = () => {
  const contentUI = content.map((element) => (
    <Box
      key={element.id}
      display='flex'
      justifyContent='space-around'
      mb={3}
      sx={{ flexDirection: { xs: 'column', md: 'row' } }}
    >
      <Box display='flex' flexDirection='column' justifyContent='space-between'>
        <Typography>{element.date}</Typography>
        <Box>
          <Typography
            variant='h3'
            component='h3'
            mb={2}
            sx={{ fontWeight: 'bold', color: 'error.dark' }}
          >
            {element.name}
          </Typography>
          <Typography mb={2}>{element.description}</Typography>
          <a href={element.link} target='blank' style={{ marginBottom: '2px' }}>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={1}
              sx={{
                backgroundColor: '#181818',
                width: '40%',
                border: '1px black',
              }}
            >
              <LinkIcon />
              <Typography variant='h6' sx={{ color: 'white' }}>
                Link to Website
              </Typography>
            </Stack>
          </a>
        </Box>
        <Grid container gap={1}>
          {element.skills.map((item, index) => (
            <Grid
              key={index}
              container
              item
              xs={3}
              sm={2}
              p={2}
              justifyContent='center'
              alignItems='center'
              sx={{
                backgroundColor: '#181818',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '5px',
              }}
            >
              {item}
            </Grid>
          ))}
        </Grid>
      </Box>
      <CardMedia component='img' image={element.image} sx={{ width: '40%' }} />
    </Box>
  ));
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h3' component='h2' sx={{ color: 'white', mb: 3 }}>
        Portfolio
      </Typography>
      <Box>{contentUI}</Box>
    </Box>
  );
};

export default Portfolio;
