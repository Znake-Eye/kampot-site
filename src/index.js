import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App from './App';
import EntertainmentPlace from './EntertainmentPlace';
import Action from './Action';
import Food from './Food';
import Hotel from './Hotel';
import EntertainmentDetail from './EntertainmentDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path="/entertainmentplace" element={<EntertainmentPlace />} />
          <Route path='/enterDetail' element={<EntertainmentDetail/>} />
          <Route path='/action'  element={<Action />} />
          <Route path='/food'  element={<Food/>} />
          <Route path='/hotel' element={<Hotel />} />
        </Routes>
  </BrowserRouter>

  
);

