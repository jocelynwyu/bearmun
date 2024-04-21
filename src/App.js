import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Secretariat from './components/pages/Secretariat';
import Schedule from './components/pages/Schedule';
import Location from './components/pages/Location';
import Policies from './components/pages/Policies';
import FAQ from './components/pages/FAQ';
import Novice from './components/pages/Novice';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.add('scroll-to-top');

    const timeoutId = setTimeout(() => {
      document.body.classList.remove('scroll-to-top');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/secretariat' exact element={<Secretariat />} />
          <Route path='/schedule' exact element={<Schedule />} />
          <Route path='/locations' exact element={<Location />} />
          <Route path='/policies' exact element={<Policies />} />
          <Route path='/faq' exact element={<FAQ />} />
          <Route path='/novice-committees' exact element={<Novice />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
