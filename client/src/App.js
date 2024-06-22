import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Home } from '../src/pages/LandingPage/landingPage';
import { About } from '../src/pages/AboutPage/aboutPage';
import { Career } from '../src/pages/CareerPage/careerPage';
import { Contact } from '../src/pages/ContactPage/contactPage';

function App() {
  return (
    <Router>
      <div>
        <navBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
