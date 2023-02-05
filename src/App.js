import { Typography } from "@mui/material";
import './App.css'
import Home from "./Screen/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PersonalDetails from "./Screen/PersonalDetails/PersonalDetails";
import Documents from "./Screen/Documents/Documents";
import DeclarationScreen from "./Screen/DeclarationScreen/DeclarationScreen";
import { combineReducers, createStore } from "redux";
import rootReducer from "./Redux/reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import ConfirmDetails from "./Screen/ConfirmDetails/ConfirmDetails";
import Navbar from './Components/Navbar/Navbar';

// Creating the redux store and enabling dev tools for development purposes

const reduxStore = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <>
      {/* Wrapping the entire app with the provider to make the store available globally */}

      <Provider store={reduxStore}>
        <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route path="/" element = {<Navigate to = '/home' />} ></Route>
            <Route path="/home" element = {<Home/>}> </Route>
            <Route path="/personal-details" element = {<PersonalDetails/>} ></Route>
            <Route path="/documents" element = {<Documents/>} ></Route>
            <Route path="/declaration" element = {<DeclarationScreen/>} ></Route>
            <Route path="/confirm-details" element = {<ConfirmDetails/>} ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
