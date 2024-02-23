import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Panel from './components/Panel'; 
import PhotoDetail from './components/PhotoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
