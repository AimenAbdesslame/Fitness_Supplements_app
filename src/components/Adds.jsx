import React , {useCallback, useEffect, useRef, useState} from 'react' ; 
import {Add}  from '../utils/SupplementsList' ; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

export const Adds = () => {
  const [currentIndex , setCurrentIndex] = useState(0) ; 


  const sliderStyles = {
     height: '100%'  , 
     position : 'relative' , 
  }


  const slideStyles = {
    height: '100%' , 
    backgroundImage :  `url(${Add[currentIndex]})`, 
    backgroundPosition: 'center' , 
    backgroundSize : "cover" ,
  }

  const leftArrowStyles = {
    position : "absolute" , 
    top : '50%' , 
    transform : 'translate(0 , -50%)' , 
    left : '32px' , 
    fontSize : '45px' , 
    color : '#fff' , 
    zIndex :  1 , 
    cursor : "pointer" , 
  }

  const rightArrowStyles = {
    position : "absolute" , 
    top : '50%' , 
    transform : 'translate(0 , -50%)' , 
    right : '32px' , 
    fontSize : '45px' , 
    color : '#fff' , 
    zIndex :  1 , 
    cursor : "pointer" , 
  }

  const nutton = {
    cursor : 'pointer' ,
    height:' 1.07143rem',
    width:' 1.07143rem',
    borderRadius: '50%' ,
    backgroundColor : 'transparent' ,
    border : '1px solid white', 
    marginRight: '15px' , 
    transition : 'backgroundColor 1s' ,
    ':hover': {
      backgroundColor: 'black',
      // Additional hover styles if needed
    },


  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0 ; 
    const newIndex = isFirstSlide ? Add.length - 1 : currentIndex - 1 ; 
    setCurrentIndex(newIndex) ; 
    
  }

  const goToNext = useCallback(() => {
    const isFinalSlide = currentIndex === 3 ; 
    const newIndex = isFinalSlide ? 0 : currentIndex + 1 ; 
    setCurrentIndex(newIndex) ;
  
  } , [currentIndex])

const goToSlide = (index) => {
   setCurrentIndex(index) ; 
}


const timerRef = useRef(null) ;


useEffect(()=> {
  if (timerRef.current){
    clearTimeout(timerRef.current);
  }
  timerRef.current = setTimeout(() => {goToNext() } , 3000) ; 
  return () => clearTimeout(timerRef.current) ;
},[goToNext]) ;




  return ( 
<>

 <div style={sliderStyles} >
   <IconButton size='large' style= {leftArrowStyles}  onClick={() => goToPrevious()} ><ArrowBackIosIcon     sx={{color : 'black'}} />   </ IconButton>
   <IconButton size='large' style= {rightArrowStyles} onClick={() => goToNext    ()} ><ArrowForwardIosIcon  sx={{color : 'black'}} /></IconButton>
   <div style= {slideStyles}></div>
   <div style = {{position:'absolute' , bottom: '25px' , right:'calc(50% - 15px)' }}>
    
    {
     Add.map((item , index) => (
      <button key={index} style={nutton} onClick={() =>goToSlide(index)} >
      </button>
     ))
    }
   </div>
 </div>

 </>
  )
}

