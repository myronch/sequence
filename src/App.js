import React, { useRef } from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from './components/Header'; 
import Homepage from './components/Homepage'; 
import Sequence from './components/Sequence'; 
import Taskbar from './components/Taskbar';

export default function App() {
  const sequenceRef = useRef(null);
  return (
    <div>
      <Header /> 
      <Taskbar /> 
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="sequence" element={<Sequence ref={sequenceRef} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

