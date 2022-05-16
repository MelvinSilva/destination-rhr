import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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



const App = () => {


  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Auth />} >
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/home/choice-station" element={<ChoiceStation />} />
          <Route path="/stations/:id_station/" element={<HomeStation />} >
            <Route path="accomodation" element={<GetAccomodation />} >
              <Route path="update" element={<UpdateAccomodation />} />
            </Route>
            <Route path="eat" element={<Eat />} />
            <Route path="store" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
