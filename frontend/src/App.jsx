import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShowBook from './Pages/Showbook';
import CreateBooks from './Pages/CreateBooks';
import EditBook from './Pages/Editbook';
import DeleteBook from './Pages/Deletebook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;