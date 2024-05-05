import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManiNavbar from './Component/ManiNavbar'; // Make sure to import ManiNavbar component
import Mainpage from './Screen/Mainpage'; // Make sure to import Mainpage component
import About from './Screen/About'; // Make sure to import About component
import Details from './Screen/Details';
import NEOData from './Screen/NEOData';
import EpicImage from './Screen/EpicImage';
import CMEAnalysis from './Screen/CMEAnalysis';
import NASAImage from './Screen/NASAImage';
import Home from './Screen/Home';
import Footer from './Component/Footer';
import SolarSyatem from'./Screen/SolarSystem';

import Jupiter from './Screen/Jupiter';
import Mars from './Screen/Mars';
import Mercury from './Screen/Mercury';
import Neptune from './Screen/Neptune';
import Saturn from './Screen/Saturn';
import Uranus from './Screen/Uranus';
import Venus from './Screen/Venus';

import Login from './Screen/Login/Login';
import Registration from './Screen/Login/Registration';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <ManiNavbar/>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/about' element={<About />} />
          <Route path='/details' element={<Details/>}/>
          <Route path='/neo' element={<NEOData/>}/>
          <Route path='/epic' element={<EpicImage/>}/>
          <Route path='/cem' element={<CMEAnalysis/>}/>
          <Route path='/nasaimg' element={<NASAImage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/solar' element={<SolarSyatem/>}/>

          <Route path='/mercury' element={<Mercury/>}/>
          <Route path='/jupiter' element={<Jupiter/>}/>
          <Route path='/mars' element={<Mars/>}/>
          <Route path='/neptune' element={<Neptune/>}/>
          <Route path='/saturn' element={<Saturn/>}/>
          <Route path='/uranus' element={<Uranus/>}/>
          <Route path='/venus' element={<Venus/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>

        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
