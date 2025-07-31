import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/content";
import './index.css'
import Form from "./components/forms";
import Suggestions from "./components/suggestions";

import About from "./components/about";

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Routes>
        <Route path="/form" element={<Form />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/suggestions" element={<Suggestions />} />

      </Routes>
    
   
    </div>
    
  );
}
