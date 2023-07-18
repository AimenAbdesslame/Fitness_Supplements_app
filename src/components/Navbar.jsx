import React from 'react';
import {Link} from 'react-router-dom' ; 
import Stack from '@mui/material/Stack';
import Logo from '../assets/images/logo.webp' ; 
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';



const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack  
         direction="row" 
         sx={{
          gap : {sm :"122px" , xs : "40px"} ,
          mt : {sm : '0px' , xs : '0px'} ,
          justifyContent :{ xs : 'space-between', md :'flex-start' },

         }}
               >
        <Link to="/" >
          <img src={Logo} alt="Logo" style={{width: '150px' , height:'150px' , margin:'0 20px'}}/>
        </Link>
        

        {/*for the medium and large devices */}
        <Stack
            direction= "row"
            gap = "90px"
            fontSize = "24px" 
            alignItems="center"
            justifyContent="flex-end"
            px = "10px" 
            sx={{
              display : {xs : 'none' , md: 'flex'}
            }}
        >
          <Link to="/" style={{textDecoration:'none' , color:"#3A1212" }}>Home</Link>
          <a href='#exercises' style ={{
            textDecoration:"none" , color :'#3A1212'
          }}>Exercises</a>
          <a href='#Supplements' style={{
            textDecoration:"none" , color : '#3A1212'
          }}>
            Supplements 
          </a>
        </Stack>



    {/*for the small devices : */}
    <Box
      sx={{
        display: {xs : 'block' , md : 'none'} ,
        mt :"50px" ,
      }}

    >
      <IconButton
        aria-label='Menu' 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{width:'50px' , height: "50px" , color : 'black'}}/>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Link to="/" style={{textDecoration:'none' , color:"#3A1212" }}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}>      
            <a href='#exercises' style ={{
            textDecoration:"none" , color :'#3A1212'
            }}>Exercises</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href='#Supplements' style={{
            textDecoration:"none" , color : '#3A1212'
          }}>
            Supplements 
          </a>
        </MenuItem>
      </Menu>
    </Box>
        
      </Stack>



    </>
  )
}

export default Navbar