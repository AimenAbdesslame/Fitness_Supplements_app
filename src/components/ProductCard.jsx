import React , {useState}from 'react'
import Rating from '@mui/material/Rating';

export const ProductCard = ({ products ,product , addProducts}) => {
  const isIn = products.includes(product) ;
  return (
    <>
    <div className="card">
         <img src={product.src} />
         <div className="name">{product.name}</div>
         <div className="footer-card">
         <div className="prix"><b>{product.price}&nbsp;$</b></div>
         <Rating name="half-rating-read" defaultValue={product.Rating} precision={0.5} readOnly sx={{px:'10px'}} />
         <button onClick={() => {addProducts(product)}}>
             {
              (isIn)  ? 'Added' : 'Add to cart' 
             }
         </button>
    </div>
    </div>
   </>
  )
}
