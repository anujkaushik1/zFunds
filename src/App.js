import { Typography } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Home from "./Screen/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PersonalDetails from "./Screen/PersonalDetails/PersonalDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element = {<Navigate to = '/home' />} ></Route>
          <Route path="/home" element = {<Home/>}> </Route>
          <Route path="/personal-details" element = {<PersonalDetails/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
