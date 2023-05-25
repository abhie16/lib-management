import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Books from './components/Books'
import Bookdetails from './components/Bookdetails';
import BookCreate from './components/BookCreate';
import BookDelete from './components/BookDelete';
import BookUpdate from './components/BookUpdate';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Books/>} />
          <Route path='/books/create' element={<BookCreate/>} />
          <Route path='/books/:id' element={<Bookdetails/>} />
          <Route path='/books/:id/update' element={<BookUpdate/>} />
          <Route path='/books/:id/delete' element={<BookDelete/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer/>
      </Router>
  );
}

export default App;
