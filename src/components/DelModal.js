import React, { Component } from "react";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { connect } from "react-redux";

class DelModal extends Component {
    deleteEmp() {
        this.props.getSelectedId(0);
        this.props.onDelEmp(this.props.selectedId);
        this.props.handleClose();
    };
    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы действительно хотите удалить эту запись?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={this.deleteEmp.bind(this)}>
                        Удалить
                    </Button>
                </Modal.Footer>
            </div>
        )
    }
}

export  default connect(
    state => ({
        employeesStore: state
    }),
    dispatch => ({
        onDelEmp: (emp) => {
            dispatch({
                type: 'DELETE_EMPLOYEE',
                payload: emp
            })
        }
    })
)(DelModal);
