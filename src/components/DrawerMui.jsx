import React, { useState } from 'react' ; 
import {Drawer ,  Typography, IconButton, Stack} from "@mui/material" ; 
import CloseIcon from '@mui/icons-material/Close';
import { ProductItem } from './ProductItem';

const DrawerMui = ({isDrawerOpen ,setIsDrawerOpen ,products,setProducts }) => {
 

  const RemoveProduct = (product) => {
     const newProducts = products.filter((item) => item.id !== product.id ) ;
     setProducts(newProducts) ;
  }

  
  
  return (
    <>
       <Drawer  anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>

            <Stack 
               direction='row'
               p = {2}
               sx={{ width:{xs : '80vw' , md : '500px'}}}
               role='presentation'
               alignItems='center'
               gap= "10px"
            >
                <Typography  color='black'   fontWeight='600' letterSpacing='-0.05em' sx ={{ fontSize:{xs:'1.5rem',md:'1.6rem'} }}> 
                  {(products.length == 0) ?  ' ' : 'Shopping Bag' }
                </Typography>
                <Typography color='black' mr='auto' fontWeight='600' fontSize='1.5rem'>
                  {(products.length == 0) ?  'You cart is empty' : `${products.length} items`}
                </Typography>
                <IconButton onClick={() => setIsDrawerOpen(false)}>
                     <CloseIcon backgroundColor='black' fontSize='large'/>
                </IconButton>
            </Stack>

            <Stack
              mt='10px'
              direction='column'
              gap = "16px"
              sx={{mx : {xs: '40px' , md: '20px' }}}
            >
               {
                  products.map((product) => (
                    <>
                      <ProductItem product={product} RemoveProduct={RemoveProduct} />
                    </>
                  ))
               }
            </Stack>
       </Drawer>
    </>
  )
}

export default DrawerMui ;
