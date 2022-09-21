import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './pages/Details';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
