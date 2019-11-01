import React, { Component} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

class NavMenu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>SB-DEMO</Navbar.Brand>
                    <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link><Link to={'/'}>Список сотрудников</Link></Nav.Link>
                        <Nav.Link><Link to={'/newemployee'}>Добавить запись</Link></Nav.Link>
                        <Nav.Link><Link to={'/settings'}>Настройки</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavMenu;
