import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Books from './components/Books'

function App() {
  return (
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Books/>} />
        </Routes>

        <Footer/>
      </Router>
  );
}

export default App;
