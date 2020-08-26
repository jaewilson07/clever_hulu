import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header.component';
import Navbar from './components/navbar/Navbar.component';
import Results from './components/results/Results.component';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Comedy');

  return (
    <div className="App">
      <Header />
      <Navbar setSelectedCategory={setSelectedCategory} />
      <Results selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
