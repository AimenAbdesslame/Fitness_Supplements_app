import React from "react";
import { Route , Routes } from "react-router-dom";
import {Box} from '@mui/material' ;
import ExerciceDetail from "./pages/ExerciceDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box width="100vw"  > 
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercices/exercise/:id" element={<ExerciceDetail />} />
          </Routes>  
          <Footer />  
      </Box>
    </>
  );
}

export default App;
