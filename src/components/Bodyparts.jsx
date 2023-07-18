import React from 'react' ; 
import {Button, Typography} from '@mui/material' ; 
import Icon from '../assets/icons/gym.jpeg' ; 


export const Bodyparts = ({item ,  bodypart , setBodypart }) => {

  return (
    <Button
     alignItems="center" 
     justifyContent="center"  
     className= "bodyPart-card"
     sx={{
        border : bodypart === item ? 'none' : '1px solid black' , 
        borderTop : bodypart === item ? '4px solid black'  : '',
        background: '#fff',
        borderBottomLeftRadius: {md:'20px'},
        width: {md:'270px' , xs :'100px'}, 
        height:{md:'282px' , xs :'70px'}, 
        cursor: 'pointer', 
        gap: {md:'47px'}, 
     }}
     onClick={() => {
       setBodypart(item) ; 
       window.scrollTo({top:1800 , left : 100  , behavior:'smooth' }) ; 
   
  
     }}
    >
      <img src={Icon}  alt="dumbles" className = "DumblsIcon"/>
      <Typography sx={{fontSize:{xs:'20px' , md: '24px'}}} fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item} </Typography>
    </Button>

  )
}
