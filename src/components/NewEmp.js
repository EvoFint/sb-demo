import React, {Component} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import EmpForm from "./EmpForm";

class NewEmp extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="4">
                        <EmpForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewEmp;
