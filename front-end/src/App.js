import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import ChoiceStation from './components/station/ChoiceStation';
import GetAccomodation from './components/tab/GetAccomodation';
import HomeStation from './components/tab/HomeStation';
import Eat from './components/tab/Eat';
import Store from './components/tab/Store';
import UpdateAccomodation from './components/tab/UpdateAccomodation';
import AuthTokenContext from './components/context/AuthTokenContext';
import Admin from './components/tab/Admin';

function App() {
  // on initialise les accolodes pour entrer directmeent dans l'objet USER
  const [user, setUser] = useState({});

  return (

    <AuthTokenContext.Provider value={{ user, setUser }}>

      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/administration" element={<Admin />} />
            <Route path="/" element={<Navigate to="/home" />} />
<<<<<<< HEAD
            <Route path="/home" element={<Auth />}>
=======

            <Route path="/home" element={<Auth />} >
>>>>>>> 5036116e349f92ddfb290e013c09d7c233bf321f
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            {user.profil_user && <Route path="/home/choice-station" element={<ChoiceStation />} />}
            {user.profil_user && (
            <Route path="/stations/:id_station/" element={<HomeStation />}>
              <Route path="accomodation" element={<GetAccomodation />}>
                <Route path="update" element={<UpdateAccomodation />} />
              </Route>
              <Route path="eat" element={<Eat />} />
              <Route path="store" element={<Store />} />
<<<<<<< HEAD
            </Route>
            )}
=======
            </Route>}

>>>>>>> 5036116e349f92ddfb290e013c09d7c233bf321f
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthTokenContext.Provider>
  );
}

export default App;
