import { IconButton  ,Box } from '@mui/material';
import React  , {useState , useEffect} from 'react' ;
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { Supplements } from '../components/Supplements';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css' ;
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import DrawerMui from '../components/DrawerMui';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}


     const Home = () => {
     const [exercises , setExercises] = useState([]) ; 
     const [bodypart, setBodypart] = useState('all') ; 
     const [products , setProducts] = useState([]) ; 
     const [open , setOpen] = useState(false) ; // for the toast (the shop toast) ; 
     const [isDrawerOpen , setIsDrawerOpen] = useState(false) ; 


     const handleClick = () => {
      setOpen(true); 
     }
     const handleClose = () => {
      setOpen(false); 
     }


 

  useEffect(() => {
    handleClick() ; 
  }, [products])
    


     const addProducts = (newProduct) => {
      const productExists = products.some((product) => product.id === newProduct.id);
      if (productExists) {
        return;
      }
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    };
  
  return (
    <Box
     position="relative"
     width= "100vw"
     border = "1px solid transparent"
    >
       <IconButton size= 'large' sx = {{color:"black"  , position : 'absolute' , top : '-95px' , right: {md:'15px' , xs:'55px'} }} 
         onClick = {() => {setIsDrawerOpen(true)}}
       >
          <StyledBadge badgeContent={products.length } color="secondary">
             <ShoppingCartIcon />
          </StyledBadge>
       </IconButton>
      <HeroBanner      />
      <SearchExercises 
          setExercises={setExercises}Footer
          bodypart={bodypart}
          setBodypart={setBodypart}
      />
    
      <Exercises       
          setExercises={setExercises}
          bodypart={bodypart}
          exercises={exercises}
      />
      <Supplements 
        products={products}
        addProducts = {addProducts }
      />

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="plain"
        message={(
            <>
            <IconButton size= 'large' sx = {{color:"white"   }} >
              <StyledBadge badgeContent={products.length } color="secondary">
                 <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            </>
        )}
        onClick = {() =>  {window.scrollTo({top:0 , left : 0  , behavior:'smooth' }) ; setIsDrawerOpen(true)} }
        sx={{backgroundColor:'black'}}
      />
      <DrawerMui isDrawerOpen={isDrawerOpen} setIsDrawerOpen = {setIsDrawerOpen} products={products}  setProducts = {setProducts}/>
      </Box>
      

    
  )
}

export default Home