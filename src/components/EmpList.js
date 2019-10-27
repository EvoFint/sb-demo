import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';

import EmpTable from "./EmpTable";
import ViewEmp from './ViewEmp';

class EmpList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedId: 0
        });
        this.getSelectedId = this.getSelectedId.bind(this);
    }
    getSelectedId(selectedId) {
        this.setState({
            selectedId: selectedId
        });
    };
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ViewEmp selectedId={this.state.selectedId}/>
                    </Col>
                    <Col>
                        <EmpTable getSelectedId={this.getSelectedId}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EmpList;
