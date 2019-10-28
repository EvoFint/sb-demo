import React, { Component } from "react";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class ChanModal extends Component {
    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>Изменение</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={this.props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </div>
        )
    }
}

export  default ChanModal;
