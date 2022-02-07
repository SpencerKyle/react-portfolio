import './App.css';
import React, { useState } from 'react';
import  { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [navItems] = useState([
    { name: "About", description: "about me page"},
    { name: "Portfolio", description: "page containing past projects"},
    { name: "Contact", description: "contact page with form" },
    { name: "Resume", description: "page containing resume"}
  ]);

  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  return (
  <Router>
    <div className="App">
        <Header />
        <Nav
          navItems={navItems}
          setCurrentNavItem={setCurrentNavItem}
          currentNavItem={currentNavItem}
        />
        <main>
          <Routes>
            <Route exact path='/react-portfolio' element={<About />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/portfolio' element={<Portfolio />}/>
            <Route exact path='/contact' element={<ContactForm />}/>
            <Route exact path='/resume' element={<Resume />}/>
          </Routes>
        </main>
        <Footer />
    </div>
  </Router>
  );
}

export default App;