import React, { Component } from 'react';
import { connect } from "react-redux";
import { Table } from 'react-bootstrap';

class EmpTable extends Component {
    targetTableRow(e) {
        const id = e.currentTarget.getAttribute('data-key');
        console.log(id);
        this.props.getSelectedId(id);
    };

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>ФИО</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.employeesStore.map((item, index) =>
                        <tr key={index} data-key={index} onClick={this.targetTableRow.bind(this)}>
                            <th>{index + 1}</th>
                            <td>{item.surname} {item.firstName} {item.lastName}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        )
    }
}

export default connect(
    state => ({
        employeesStore: state
    })
)(EmpTable);
