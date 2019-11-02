import React, {  } from 'react';
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Moment from 'moment';

function ViewEmp(props) {
    const { selectedId, employeesStore } = props;
    const chackStore = (key) => {
        if(employeesStore.length == 0) {
            return ''
        } else {
            return employeesStore[selectedId][key]
        }
    };
    return (
        <Container>
            {console.log(Moment(chackStore('')).format("DD.MM.YYYY"))}
            <Row>
                <Col><p><strong>Фамилия</strong></p></Col>
                <Col><p>{chackStore('surname')}</p></Col>
            </Row>
            <Row>
                <Col><p><strong>Имя</strong></p></Col>
                <Col><p>{chackStore('firstName')}</p></Col>
            </Row>
            <Row>
                <Col><p><strong>Отчество</strong></p></Col>
                <Col><p>{chackStore('lastName')}</p></Col>
            </Row>
            <Row>
                <Col><p><strong>Дата рождения</strong></p></Col>
                <Col><p>{
                    chackStore('birthday') === '' ? '' : Moment(chackStore('birthday')).format("DD.MM.YYYY")
                }</p></Col>
            </Row>
            <Row>
                <Col><p><strong>Табельный номер</strong></p></Col>
                <Col><p>{chackStore('serviceNumber')}</p></Col>
            </Row>
            <Row>
                <Col><p><strong>Должность</strong></p></Col>
                <Col><p>{chackStore('positionEmp')}</p></Col>
            </Row>
            <Row>
                <Col><p><strong>Подразделение</strong></p></Col>
                <Col><p>{chackStore('division')}</p></Col>
            </Row>
            <Row>
                <Col>

                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Button variant='secondary'
                                    disabled={employeesStore.length == 0}
                                    onClick={(e) => props.getTargetButton('change')}>
                                Изменить
                            </Button>
                        </Col>
                        <Col>
                            <Button variant='danger'
                                    disabled={employeesStore.length == 0}
                                    onClick={(e) => props.getTargetButton('delete')}>
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default connect(
    state => ({
        employeesStore: state.employees
    })
)(ViewEmp);
