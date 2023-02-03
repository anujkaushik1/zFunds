import { Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/Home";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element = {<Navigate to = '/home' />} ></Route>
          <Route path="/home" element = {<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
