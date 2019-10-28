import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';

import EmpTable from "./EmpTable";
import ViewEmp from './ViewEmp';
import ModalWindow from "./ModalWindow";

class EmpList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedId: 0,
            showModal: false,
            targetButton: null
        });
        this.getSelectedId = this.getSelectedId.bind(this);
    }
    getSelectedId(selectedId) {
        this.setState({
            selectedId: selectedId
        });
    };
    handleCloseModal() {
      this.setState({
          showModal: false
      })
    };
    getTargetButton(state) {
        this.setState({
            showModal: true,
            targetButton: state
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ViewEmp selectedId={this.state.selectedId}
                                 getTargetButton={this.getTargetButton.bind(this)}/>
                    </Col>
                    <Col>
                        <EmpTable getSelectedId={this.getSelectedId}/>
                    </Col>
                </Row>
                <ModalWindow show={this.state.showModal}
                             handleClose={this.handleCloseModal.bind(this)}
                             targetButton={this.state.targetButton}
                             selectedId={this.state.selectedId}
                             getSelectedId={this.getSelectedId}
                />
            </Container>
        );
    }
}

export default EmpList;
