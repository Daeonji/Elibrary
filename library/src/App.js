import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTab from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import AvailableBooks from "./AvailableBooks";
import CheckedoutBooks from "./CheckedoutBooks";
import CheckoutBook from "./CheckoutBook";
import CheckinBook from "./CheckinBook";
import Booksearch from "./BookSearch";
function App() {
  return (
    <Router>
      <React.Fragment>
        <header>
          <NavTab />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/available-books" element={<AvailableBooks />} />
            <Route path="/checkedout-books" element={<CheckedoutBooks />} />
            <Route path="/books/checkout/:id/" element={<CheckoutBook />} />
            <Route path="/books/checkin/:id" element={<CheckinBook />} />
            <Route path="/books/search/:searchQuery" element={<Booksearch />} />
          </Routes>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
