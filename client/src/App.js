import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/LandingPage/landingPage'
import About from './pages/AboutPage/AboutPage'
import Career from './pages/CareerPage/careerPage'
import Contact from './pages/ContactPage/contactPage'
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import OngoingProjectPage from "./pages/OngoingProjectPage/OngoingProjectPage";
import CompletedProjectPage from "./pages/CompletedProjectPage/completedProjectPage";
import StaffPage from "./pages/StaffPage/staffPage";



function App() {
  return (
      <Router>
          <div>
              <NavBar/>
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
                      <Route
                          path='/ongoing-projects'
                          element={<OngoingProjectPage/>}
                      />
                      <Route
                          path='/completed-projects'
                          element={<CompletedProjectPage/>}
                      />
                      <Route
                          path='/staffs'
                          element={<StaffPage/>}
                      />
                  </Routes>
              </div>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
