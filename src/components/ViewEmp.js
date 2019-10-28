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
        return (
            <Container>
                {console.log(this.props.employeesStore)}
                <Row>
                    <Col><p><strong>Фамилия</strong></p></Col>
                    <Col><p>{this.props.employeesStore[this.props.selectedId].surname}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Имя</strong></p></Col>
                    <Col><p>{this.props.employeesStore[this.props.selectedId].firstName}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Отчество</strong></p></Col>
                    <Col><p>{this.props.employeesStore[this.props.selectedId].lastName}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Дата рождения</strong></p></Col>
                    <Col><p>{Moment(this.props.employeesStore[this.props.selectedId].birthday).format("DD.MM.YYYY")}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Табельный номер</strong></p></Col>
                    <Col><p>{this.props.employeesStore[this.props.selectedId].serviceNumber}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Должность</strong></p></Col>
                    <Col><p>{this.props.employeesStore[this.props.selectedId].positionEmp}</p></Col>
                </Row>
                <Row>
                    <Col><p><strong>Подразделение</strong></p></Col>
                    <Col><p>{this.props.employeesStore[this.props.selectedId].division}</p></Col>
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
