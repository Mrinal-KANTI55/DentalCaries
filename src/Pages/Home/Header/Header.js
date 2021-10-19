import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const Header = () => {
    const {user, signOutButton}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md lg"  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Dental Caries</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Link className='text-light text-decoration-none me-3' to="/home">Home</Link>
                        <Link className='text-light text-decoration-none me-3' to="/servises">Services</Link>
                        <Link className='text-light text-decoration-none me-3' to="/healthyfoods">HealthyFoods</Link>
                        <Link className='text-light text-decoration-none me-3' to="/help">Help</Link>
                        <Link className='text-light text-decoration-none me-3' to="/login">{!user.email ? 'Log In':
                        <Button onClick={signOutButton} >log Out</Button> }</Link>
                        </Nav>
                        <Nav>
                        <Link className='text-light text-decoration-none me-3' to="/login">{!user.email ? 'welcome':
                        `welcome ${user.displayName}` }</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;