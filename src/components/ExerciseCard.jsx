import { Stack , Button , Typography } from '@mui/material'
import React from 'react'; 
import { Link } from 'react-router-dom';

export const ExerciseCard = ({key , exercise}) => {
  return (
  <Link className="exercise-card" to={`/exercises/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} />
    <Stack direction="row" >
         <Button
         sx={{ml:'21px' , color:'#fff' , background:'black' , fontSize:'14px'
         , borderBottomLeftRadius :'20px' , textTransform:'capitalize' , borderTopRightRadius: '20px'}}
         >
          {exercise.bodyPart}
         </Button>
         <Button
         sx={{ml:'21px' , color:'black' , background:'white' , fontSize:'14px'
         , borderRadius:'20px' , textTransform:'capitalize'}}
         >
          {exercise.target}
         </Button>
         <Typography ml="21px" color='#000' fontWeight="bold" mt="11px"  pb="10px" textTransform="capitalize" fontSize="15px">
            {exercise.name}
         </Typography>
    </Stack>
  </Link>
  )
}
