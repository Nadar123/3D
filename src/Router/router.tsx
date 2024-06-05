import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Policies from '../components/Home/Policies';
import Notifications from '../components/Home/Notifications';
import Cookies from '../components/Home/Cookies';

const AppRouter = () => {
  return (
    <Router>
      <Header username='John Doe' profession='Software Engineer' />{' '}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/policies' element={<Policies />} />{' '}
        <Route path='/notifications' element={<Notifications />} />{' '}
        <Route path='/cookies' element={<Cookies />} />{' '}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
