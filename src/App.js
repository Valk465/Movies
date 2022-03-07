import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import Home from "./pages/Home" ; 

const App = () => {
  return (
   <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}/>
     < Route path="/coup-de-coeur" element= {<UserList/>} /> 
     <Route path="*" element= {<Home/>}/>
    </Routes>
   </BrowserRouter>
  );
};

export default App;
