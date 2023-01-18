import { Box, Typography } from '@mui/material';

const Portfolio = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h3' component='h2' sx={{ color: 'white', mb: 3 }}>
        Portfolio
      </Typography>
      <Box>content</Box>
    </Box>
  );
};

export default Portfolio;
