import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './header.css'

function Header() {
    return (
            <Navbar className="sticky-top" expand="md"  variant="dark" bg="dark">
              <Navbar.Toggle aria-controls="navbar-nav"  className="m-3"/>
              <Navbar.Collapse  id="navbar-nav">

                <Nav className="mr-auto nav-links">
                    <Nav.Link className="nav-item" href="/">Home</Nav.Link>

                    <NavDropdown className="nav-item" title="Activities">
                        <NavDropdown.Item href="/activities">Activities</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/add-activity">Add an Activitiy</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className="nav-item" title="Meetings">
                        <NavDropdown.Item href="/meetings">Meetings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/add-meeting">Add a Meeting</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className="nav-item" title="Join Us!">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/create-account">Become a Member</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Header