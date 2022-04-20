import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {


  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
