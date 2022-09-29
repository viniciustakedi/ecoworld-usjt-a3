import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
