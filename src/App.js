import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Secretariat from './components/pages/Secretariat';
import Schedule from './components/pages/Schedule';
import Location from './components/pages/Location';
import Policies from './components/pages/Policies';
import FAQ from './components/pages/FAQ';
import Novice from './components/pages/Novice';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
          <Route path='/' exact element={ <Home />}>
          </Route>
          <Route path='/home' exact element={ <Home />}>
          </Route>
          <Route path='/secretariat' exact element={ <Secretariat />}>
          </Route>
          <Route path='/schedule' exact element={ <Schedule />}>
          </Route>
          <Route path='/locations' exact element={ <Location />}>
          </Route>
          <Route path='/policies' exact element={ <Policies />}>
          </Route>
          <Route path='/faq' exact element={ <FAQ />}>
          </Route>
          <Route path='/novice-committees' exact element={ <Novice />}>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
