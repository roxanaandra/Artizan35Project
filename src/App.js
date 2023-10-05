import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import RestaurantMenu from './components/RestaurantMenu';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Menu from './components/Menu';




function App() {
  return (
    <>
      <Router>
      <Header /> 
    <Routes>
        <Route path="/home" component={Contact} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/contact" component={Contact} />
    </Routes>
      
    </Router>
      <Main />
      <Footer />
    </>
  );
}

export default App;
