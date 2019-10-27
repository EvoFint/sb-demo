import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router";

class EmpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    submitAction = null;

    render() {
        if(this.state.redirect) {
            return <Redirect to={'/'}/>
        }
        return (
            <Formik
                initialValues={{
                surname: "",
                firstName: "",
                patronymic: "",
                birthday: "",
                serviceNumber: "",
                positionEmp: "",
                division: ""
                }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    if(this.submitAction == 'saveAndDoMore') {
                        setSubmitting(true);
                        this.props.onAddEmp(values);
                        resetForm();
                        setSubmitting(false);
                    }
                    if(this.submitAction == 'saveAndTransition') {
                        setSubmitting(true);
                        this.props.onAddEmp(values);
                        resetForm();
                        setSubmitting(false);
                        this.setState({
                            redirect: true
                        })
                    }
                }}
            >
                {({values, errors, touched, handleChange, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Фамилия
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите фамилию" name="surname" id="surName" onChange={handleChange} value={values.surname}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Имя
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите имя" name="firstName" id="firstName" onChange={handleChange} value={values.firstName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Отчество
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите отчество" name="patronymic" id="patronymic" onChange={handleChange} value={values.patronymic}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Дата рождения
                            </Form.Label>
                            <Form.Control type="date" placeholder="Введите дату рождения" name="birthday" id="birthday" onChange={handleChange} value={values.birthday}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Табельный номер
                            </Form.Label>
                            <Form.Control type="number" placeholder="Введите табельный номер" name="serviceNumber" id="serviceNumber" onChange={handleChange} value={values.serviceNumber}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Должность
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите должность" name="positionEmp" id="positionEmp" onChange={handleChange} value={values.positionEmp}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Подразделение
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите подразделение" name="division" id="division" onChange={handleChange} value={values.division}/>
                        </Form.Group>

                        <Form.Row>
                            <Col>
                                <Button variant="dark" onClick={() => {
                                    this.submitAction = 'saveAndDoMore';
                                    handleSubmit();
                                }}>
                                    Сохранить и добавить еще
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="secondary" onClick={() => {
                                    this.submitAction = 'saveAndTransition';
                                    handleSubmit();
                                }}>
                                    Сохранить и перейти к списку
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default connect(
    state => ({
        empoyeesStore: state
    }),
    dispatch => ({
        onAddEmp: (emp) => {
            dispatch({
                type: 'ADD_EMPLOYEE',
                payload: emp
            })
        }
    })
)(EmpForm);
