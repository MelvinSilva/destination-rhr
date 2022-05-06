import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import ChoiceStation from './components/station/ChoiceStation';
import Accomodation from './components/tab/Accomodation';
import CityInfos from './components/tab/CityInfos';
import Eat from './components/tab/Eat';
import Shopping from './components/tab/Shopping';


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
          <Route path="/home/choicestation" element={<ChoiceStation />}/>
          <Route path="/city-infos/:id_station/" element={<CityInfos />} >
            <Route path="accomodation" element={<Accomodation />}/>
            <Route path="eat" element={<Eat />}/>
            <Route path="store" element={<Shopping />}/>
          </Route>
        </Routes>  
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
