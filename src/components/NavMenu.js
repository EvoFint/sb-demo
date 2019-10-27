import React, { Component} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

class NavMenu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>SB-DEMO</Navbar.Brand>
                    <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href='/'>Список сотрудников</Nav.Link>
                        <Nav.Link href='/newemployee'>Добавить запись</Nav.Link>
                        <Nav.Link href='/settings'>Настройки</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavMenu;
