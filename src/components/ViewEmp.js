import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Moment from 'moment';

class ViewEmp extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            employeesStore: this.props.employeesStore
        });
    };
    render() {
        const { selectedId, employeesStore } = this.props;
        const employeesStoreElement = employeesStore[selectedId];
        return (
            <Container>
                <Row>
                    <Col><p><strong>Фамилия</strong></p></Col>
                    <Col><p>{employeesStoreElement.surname}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Имя</strong></p></Col>
                    <Col><p>{employeesStoreElement.firstName}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Отчество</strong></p></Col>
                    <Col><p>{employeesStoreElement.lastName}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Дата рождения</strong></p></Col>
                    <Col><p>{Moment(employeesStoreElement.birthday).format("DD.MM.YYYY")}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Табельный номер</strong></p></Col>
                    <Col><p>{employeesStoreElement.serviceNumber}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Должность</strong></p></Col>
                    <Col><p>{employeesStoreElement.positionEmp}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Подразделение</strong></p></Col>
                    <Col><p>{employeesStoreElement.division}</p></Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Button variant='secondary' onClick={(e) => this.props.getTargetButton('change')}>
                                    Изменить
                                </Button>
                            </Col>
                            <Col>
                                <Button variant='danger' onClick={(e) => this.props.getTargetButton('delete')}>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(
    state => ({
        employeesStore: state.employees
    })
)(ViewEmp);
