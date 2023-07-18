import React  , {useState , useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box , Stack , Typography} from '@mui/material' ; 
import {fetchData , exerciseOptions} from '../utils/fetchData' ; 
import { ExerciseCard } from './ExerciseCard';

const Exercises = ({setExercises , bodypart , exercises }) => {
  const [currentPage , setCurrentPage ] = useState(1) ; 
  const exercisesPerPage = 9;

  const paginate = (e , value ) => {
    setCurrentPage(value) ; 
    window.scrollTo({top : 1800 , behavior : 'smooth'})
  }
 
  console.log('1' + exercises[1]);
  const indexofLastExercise = currentPage * exercisesPerPage ; 
  const indexofFirstExercise = indexofLastExercise - exercisesPerPage ; 
  const currentExercises = exercises.slice(indexofFirstExercise , indexofLastExercise) ;


   
  useEffect(()=> {
    const fetchExercisesData = async () => { 
     let exercisesData = [] ; 
     if (bodypart === 'all') {
       exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises' , exerciseOptions ) ;
     }
     else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}` , exerciseOptions ) ;
     }
     setExercises(exercisesData) ;
    }
    fetchExercisesData(); 
  }, [bodypart])

    return (
   <>
     <Box id = "exercises"
       sx={{mt:{lg:'110px'}}}
       mt="50px"
       p = "20px"
     > 
     <Typography variant = "h3" mb="60px" textAlign="center">
       Results
     </Typography>
     <Stack direction="row" sx={{ gap :{lg:'110px' , xs:'52px'}}} 
       flexWrap="wrap" justifyContent="center"> 
      {
        currentExercises.map((exercise , index) => (
         <ExerciseCard key={index} exercise={exercise} />
        ))
      }
     </Stack>
     <Stack mt="100px" alignItems="center" >
      {
        exercises.length > 9 && (
          <Pagination 
           color = "standard" 
           shape = "rounded" 
           defaultPage={1}
           count = {Math.ceil(exercises.length / exercisesPerPage)}
           page = {currentPage}
           size="large" 
           onChange={paginate}
          />
        )
      }
     </Stack>
     </Box>
   </>
  )
}

export default Exercises