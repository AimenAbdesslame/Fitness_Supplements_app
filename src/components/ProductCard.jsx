import { Stack } from '@mui/material'
import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <Stack
      direction="column" 
      sx = {{width: '100px'}}
    >
        <img src={product.src} alt={product.name} />
    </Stack>
  )
}
