import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function NavBar({search, setSearch, setPlayer}) {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://www.balldontlie.io/api/v1/players?search=${search}&per_page=100`)
    .then(r => r.json())
    .then(info => {
      setPlayer(info.data)
    })
    navigate('players')
  }
  
  // When I want to make a fetch that grabs more than 100 players

  // while (info.meta.total_pages >== 0) {
  //  const total = []
  //   fetch(`https://www.balldontlie.io/api/v1/players?search=${search}&per_page=100`)
  //  .then(r => r.json())
  //  .then(info => setPlayer(info))
  // }
  return (
    <Navbar bg="light" expand="lg" id='box' >
      <Container >
        <Navbar.Brand component={Link} to='/' href="/">Home</Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
          </Form>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link component={Link} to='/' href="/">Home</Nav.Link>
            <Nav.Link component={Link} to='/players' href="/players">Players</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default NavBar