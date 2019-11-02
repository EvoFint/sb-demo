import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';

import DelModal from "./DelModal";
import ChanModal from "./ChanModal";

class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            modalDelete: false,
            modalChange: false
        })

    };
    render() {
        let setModal;
        if(this.props.targetButton === 'delete') {
            setModal = <DelModal handleClose={this.props.handleClose}
                                 selectedId={this.props.selectedId}
                                 getSelectedId={this.props.getSelectedId}
            />
        } else if (this.props.targetButton === 'change') {
            setModal = <ChanModal handleClose={this.props.handleClose}
                                  selectedId={this.props.selectedId}
            />
        }
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>

                {setModal}

            </Modal>
        );
    }
}

export default ModalWindow;
