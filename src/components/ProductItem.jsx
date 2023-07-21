import { Box, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react' ;
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ProductItem = ({product , RemoveProduct}) => {

    const [quantity , setQuantity] = useState(1) ;
    const increment = () => {
      if (quantity < product.contity) {
        setQuantity((prevQuantity)=> prevQuantity + 1 ) ;
      }
    }
    const decrement = () => {
        if (quantity > 1) {
          setQuantity((prevQuantity)=> prevQuantity - 1 ) ;
        }
    }


  return (
    <>
  <Stack
   direction='row'
   sx={{position:'relative'}}
  >
     <img src={product.src} alt={product.name} style={{width:"150px" , height:'150px',cursor:'pointer'}} />
     <Stack direction='row' gap='10px' >
        <Box>
         <Typography fontSize='1.3rem' lineHeight='3rem' fontWeight='600' >
              {product.name}
          </Typography>
          <Typography fontSize='1.2rem' lineHeight='1.8rem' fontWeight='400' mr='auto'>
              {product.price} <br/><br/>
              {`Quantity Available : ${product.contity}`}                                  
          </Typography>
          <IconButton sx={{position:'absolute' , top:'2px' , right:'10px'}}
           onClick = {() => {RemoveProduct(product)}}
          >
             <DeleteIcon  />
          </IconButton>
        </Box>
        <Stack direction='row' mt='auto' mb='16px' ml='10px'>
           <IconButton color='tertiary' sx={{width:'25px' , height:"25px"}}  onClick={() => {decrement()} }>
               <RemoveIcon  sx={{color:'black' , border:'1px solid black'}}/>
           </IconButton>
           <Typography  px="5px" fontWeight='500' fontSize="1.2rem">{quantity}</Typography>
           <IconButton color='tertiary' sx={{width:'25px' , height:"25px"}}  onClick={() => {increment()}} >
              <AddIcon  sx={{color:'black' , border:'1px solid black'}}/>
           </IconButton>
        </Stack>
     </Stack>
  </Stack>    
    </>
  )
}
