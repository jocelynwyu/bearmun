import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Secretariat from "./components/pages/Secretariat";
import Schedule from "./components/pages/Schedule";
import Location from "./components/pages/Location";
import Policies from "./components/pages/Policies";
import Contact from "./components/pages/Contact";
import Committees from "./components/pages/Committees";
import Footer from "./components/Footer";
import UNHRC from "./components/pages/Committees/ga/UNHRC";
import IAEA from "./components/pages/Committees/ga/IAEA";
import Regional from "./components/pages/Committees/ga/Regional";
import Legal from "./components/pages/Committees/ga/Legal";
import UNOOSA from "./components/pages/Committees/ga/UNOOSA";
import Taylor from "./components/pages/Committees/spec/Taylor";
import Tables from "./components/pages/Committees/spec/Tables";
import Formula1 from "./components/pages/Committees/spec/Formula1";
import Disney from "./components/pages/Committees/spec/Disney";
import OJ from "./components/pages/Committees/spec/OJ";
import Barbenheimer from "./components/pages/Committees/crisis/Barbenheimer";
import JCC1 from "./components/pages/Committees/crisis/JCC1";
import JCC2 from "./components/pages/Committees/crisis/JCC2";
import PJ from "./components/pages/Committees/crisis/PJ";
import UNSC from "./components/pages/Committees/crisis/UNSC";
import ADHOC from "./components/pages/Committees/crisis/ADHOC";
// import Committee from './components/pages/Committee';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("scroll-to-top");

    const timeoutId = setTimeout(() => {
      document.body.classList.remove("scroll-to-top");
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
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/secretariat" exact element={<Secretariat />} />
          <Route path="/schedule" exact element={<Schedule />} />
          <Route path="/locations" exact element={<Location />} />
          <Route path="/policies" exact element={<Policies />} />
          {/* <Route path="/contact" exact element={<Contact />} /> */}
          <Route path="/committees" exact element={<Committees />} />
          <Route path='/unhrc' exact element={<UNHRC />} />
          <Route path='/iaea' exact element={<IAEA />} />
          <Route path='/regional' exact element={<Regional />} />
          <Route path='/legal' exact element={<Legal />} />
          <Route path='/unoosa' exact element={<UNOOSA />} />
          <Route path='/taylor' exact element={<Taylor />} />
          <Route path='/tables' exact element={<Tables />} />
          <Route path='/formula1' exact element={<Formula1 />} />
          <Route path='/disney' exact element={<Disney />} />
          <Route path='/ojsimpson' exact element={<OJ />} />
          <Route path='/barbenheimer' exact element={<Barbenheimer />} />
          <Route path='/jccadani' exact element={<JCC1 />} />
          <Route path='/jcccbi' exact element={<JCC2 />} />
          <Route path='/percyjackson' exact element={<PJ />} />
          <Route path='/unsc' exact element={<UNSC />} />
          <Route path='/adhoc' exact element={<ADHOC />} /> 

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
