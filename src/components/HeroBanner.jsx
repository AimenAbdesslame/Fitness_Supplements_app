import React from 'react';
import { Box, Stack, Typography  , styled} from '@mui/material';
import { css } from '@emotion/react';

const StyledImg = styled('img')({
  position: "absolute",
  right: "2em",
  top: "0px",
  width: "0%",

  '@media (max-width:1000px)': {
    display: "none"
  },
  height: "900px",
  marginTop: "-290px",
});


const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative"  p = "2em" >
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      All about<br />
      G Y M
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises and supplements
    </Typography>
    <Stack
     direction="row" 
     gap = "20px"
    >
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center',   background: 'black', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      <a href="#Supplements" style={{ marginTop: '45px', textDecoration: 'none', width: '230px', textAlign: 'center', background: 'black', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Supplements</a>
    </Stack>
    <Typography fontWeight={600} color="black" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' , position: 'absolute' , right : '0.3em' , top : '0.1em'}}>
      Exercises
    </Typography>
 
    
  </Box>
);

export default HeroBanner;