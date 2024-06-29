import './App.css';
import LandingPage from './pages/LandingPage/landingPage';
import ContactPage from './pages/ContactPage/contactPage';
import CareerPage from './pages/CareerPage/careerPage';
import CompletedProjectPage from './pages/CompletedProjectPage/completedProjectPage';
import OngoingProjectPage from './pages/OngoingProjectPage/ongoingProjectPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>


      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/completed-projects' element={<CompletedProjectPage />} />
        <Route path='/ongoing-projects' element={<OngoingProjectPage />} />
      </Routes>

    </Router>

  );
}

export default App;
