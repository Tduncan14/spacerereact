
import './App.css';
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';
import Crew from './components/Crew/Crew';
import Destination from './components/Destination/Destination';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import {Provider} from 'react-redux';


let store = '';

function App() {
 
 
  return (

   <>
   <BrowserRouter>
 
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route  exact path="/destination" element={<Destination/>} />
        <Route  exact path="/crew" element={<Crew />} />
        <Route  exact path="/technology" element={<Technology />} />


      </Routes>
   </BrowserRouter>
  
   </>
  )
}

export default App;
