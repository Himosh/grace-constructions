import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//pages & omponents
import Home from './pages/LandingPage/landingPage'
import About from './pages/AboutPage/aboutPage'
import Career from './pages/CareerPage/careerPage'
import Contact from './pages/ContactPage/contactPage'

import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
            path='/'
            element={<Home/>}
            />
            <Route
            path='/about'
            element={<About/>}
            />
            <Route
            path='/career'
            element={<Career/>}
            />
            <Route
            path='/contact'
            element={<Contact/>}
            />
          </Routes>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
