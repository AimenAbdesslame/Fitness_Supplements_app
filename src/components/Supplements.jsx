import { Typography , Box, Tabs, Tab, Stack} from '@mui/material'
import React from 'react' ; 
import {SupplemenstList} from '../utils/SupplementsList' ; 
import { ProductCard } from './ProductCard';
import {Adds} from './Adds' ; 

export const Supplements = ({products , addProducts}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


   <>

<Box
     sx={{textAlign:"center"}}
     pt = '8rem'
     pb = '1rem' 
     id='Supplements'
     
   >
    <Typography fontWeight='700' fontSize='2.25rem' lineHeight="2.5rem" >Gym Supplements</Typography>
    <Typography fontSize="1.25rem" lineHeight="1.75rem" >Discover the best products for all you needs</Typography>
   </Box>
   <Box sx={{
     width : '100vw',
     height: {xs : '400px' , md : '600px'} , 
     margin: '10px auto',
   
   }}>
    <Adds />
   </Box>

<Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable prevent tabs example"
      sx={{backgroundColor: 'transparent '}}
>
       <Tab label="Item One" />
       <Tab label="Item Two" />
       <Tab label="Item Three" />
       <Tab label="Item Four" />
       <Tab label="Item Five" />
       <Tab label="Item Six" />
       <Tab label="Item Seven" />
</Tabs>

<div className="boxes">
            <div className="box">DELIVERY 30&nbsp;$</div>
            <div className="box">PROMOTION&nbsp;& products</div>
            <div className="box">SHIPPED THE SAME DAY</div>
</div>
 

   <Stack  
      mt='100px'
      direction="row"
      flexWrap="wrap"
      sx={{ gap :{lg:'110px' , xs:'52px'} }}
      justifyContent="center"
   >  

      {
        SupplemenstList.map((product) => (
          <ProductCard products={products}  product= {product} addProducts={addProducts}/>
        ))
      }

   </Stack>
   </>
  )
}
