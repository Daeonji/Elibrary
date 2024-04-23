import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTab from './Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from './Home';
import Books from './Books';
import AvailableBooks from './AvailableBooks';
import CheckedoutBooks from './CheckedoutBooks';
import SingleBook from "./CheckoutBook";

function App() {
  return (
    <Router>
      <React.Fragment>
        <header>
          <NavTab />
        </header>
        <main>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/books" element={<Books />}/>
            <Route path = "/available-books" element={<AvailableBooks />}/>
            <Route path = "/checkedout-books" element = {<CheckedoutBooks/>}/>
            <Route path = "books/:id" element={<SingleBook/>}/>
          </Routes>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
