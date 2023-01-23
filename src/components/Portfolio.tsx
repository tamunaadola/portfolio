import { Box, CardMedia, Divider, Stack, Typography } from '@mui/material';
import { content } from './portfolioContent';
import LinkIcon from '@mui/icons-material/Link';
import Grid from '@mui/material/Grid';

const Portfolio = () => {
  const contentUI = content.map((element) => (
    <Box key={element.id}>
      <Divider sx={{ backgroundColor: '#808080', my: 2 }} />
      <Grid
        container
        spacing={1}
        justifyContent='space-around'
        mb={3}
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Grid item xs={12} md={6} alignContent='space-between'>
          <Typography mb={3}>{element.date}</Typography>
          <Grid item>
            <Typography
              component='h3'
              mb={2}
              sx={{
                fontWeight: 'bold',
                color: 'error.dark',
                fontSize: { xs: '36px', sm: '48px' },
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              {element.name}
            </Typography>
            <Typography mb={2} px={2}>
              {element.description}
            </Typography>
            <Stack
              my={3}
              sx={{
                justifyContent: 'center',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                  backgroundColor: '#181818',
                  width: { md: '50%' },
                  border: '1px black',
                  mt: '0 !important',
                  mb: { xs: 1, md: 0 },
                }}
              >
                <a
                  href={element.link}
                  target='blank'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <LinkIcon />
                  <Typography variant='h6' sx={{ color: 'white', ml: 1 }}>
                    Link to Website
                  </Typography>
                </a>
              </Box>
              {element.githubLink && (
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    backgroundColor: '#181818',
                    width: { md: '50%' },
                    border: '1px black',
                    mt: '0 !important',
                    ml: { xs: 0, md: 2 },
                  }}
                >
                  <a
                    href={element.githubLink}
                    target='blank'
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <LinkIcon />
                    <Typography variant='h6' sx={{ color: 'white', ml: 1 }}>
                      Link to Github
                    </Typography>
                  </a>
                </Box>
              )}
            </Stack>
          </Grid>
          <Grid container gap={1} justifyContent='space-around'>
            {element.skills.map((item, index) => (
              <Grid
                key={index}
                container
                item
                xs={4}
                sm={3}
                p={2}
                justifyContent='center'
                alignContent='center'
                sx={{
                  backgroundColor: '#181818',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '5px',
                }}
              >
                <Typography textAlign='center'>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent='center'
          alignItems='center'
        >
          <CardMedia
            component='img'
            image={element.image}
            sx={{ opacity: 0.8 }}
          />
        </Grid>
      </Grid>
    </Box>
  ));
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography
        variant='h3'
        component='h2'
        sx={{ color: 'white', letterSpacing: 1.6 }}
      >
        Portfolio
      </Typography>
      <Box>{contentUI}</Box>
    </Box>
  );
};

export default Portfolio;
