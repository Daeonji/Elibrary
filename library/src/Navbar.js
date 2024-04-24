import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function NavTab() {
  const [searchQuery, setSearchQuery] = React.useState("");
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Danny' Elibrary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Catalog" id="nav-dropdown">
              <NavDropdown.Item href="/books">All Books</NavDropdown.Item>
              <NavDropdown.Item href="/available-books">Available Books</NavDropdown.Item>
              <NavDropdown.Item href="/checkedout-books">Checked Out Books</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Book ID"
              aria-label="Search"
              style={{ backgroundColor: 'white', color: 'black' }}
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
            />
            <button
              className="btn btn-outline-light"
              type="submit"
              onClick={() => navigate(`/books/search/${searchQuery}`)}
            >
              Search
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTab;