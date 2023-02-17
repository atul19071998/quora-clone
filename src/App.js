import './App.css';
import React from 'react';
 
import Navbar from './component/Navbar';
import Sidebardetails from './pages/Sidebardetails';

import Home from './pages/Home';
import Following from './pages/Following';
import Answer from './pages/Answer';
import Spaces from './pages/Spaces';
import Notification from './pages/Notification';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Following" element={<Following/>}/>
        <Route path="/Answer" element={<Answer/>}/>
        <Route path="/Spaces" element={<Spaces/>}/>
        <Route path="/Notification" element={<Notification/>}/>
        <Route path="/Sidebardetails/:names" element={<Sidebardetails/>} />
      </Routes>
      











 
      </div>
  );
}

export default App;
