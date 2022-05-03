import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import ChoiceStation from './components/station/ChoiceStation';
import Accomodation from './components/tab/Accomodation';


const App = () => {


  return (
    <div>
      <Header />
      <Accomodation />
      <Footer />
    </div>
  );
};

export default App;
