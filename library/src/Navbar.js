import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTab() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Danny' Elibrary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title = "Catalog" id= "nav-dropdown">
              <NavDropdown.Item href="/books">All Books</NavDropdown.Item>
              <NavDropdown.Item href="/available-books">Available Books</NavDropdown.Item>
              <NavDropdown.Item href= "/checkedout-books">Checked Out Books</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/addBook">About Us</Nav.Link>
          </Nav>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Enter Book ID" aria-label="Search" style={{backgroundColor: 'white', color: 'black'}} />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTab;