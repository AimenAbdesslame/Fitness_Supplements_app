import React from 'react' ; 
import {Drawer , Box , Typography, IconButton, Stack} from "@mui/material" ; 
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const DrawerMui = ({isDrawerOpen ,setIsDrawerOpen ,products,setProducts }) => {

  const RemoveProduct = (product) => {
     const newProducts = products.filter((item) => item !== product ) ;
     setProducts(newProducts) ;
  }

  const TotalPrice = 0 ; 
  

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
                  products.map((product, index) => (
                    <>
                      <Stack
                       key={index}
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
                               <IconButton color='tertiary' sx={{width:'25px' , height:"25px"}}  >
                                   <AddIcon  sx={{color:'black' , border:'1px solid black'}}/>
                               </IconButton>
                               <Typography  px="5px" fontWeight='500' fontSize="1.2rem">{1}</Typography>
                               <IconButton color='tertiary' sx={{width:'25px' , height:"25px"}}  >
                                  <AddIcon  sx={{color:'black' , border:'1px solid black'}}/>
                               </IconButton>
                            </Stack>
                         </Stack>
                      </Stack>
                    </>
                  ))
               }
            </Stack>
       </Drawer>
    </>
  )
}

export default DrawerMui ;
