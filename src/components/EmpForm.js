import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';
import { Redirect } from "react-router";
import validationSchema from "./validationSchema";

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
                lastName: "",
                birthday: "",
                serviceNumber: "",
                positionEmp: "",
                division: ""
                }}
                validationSchema={validationSchema}
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
                            <Form.Control type="text"
                                          placeholder="Введите фамилию"
                                          name="surname" id="surName"
                                          onChange={handleChange}
                                          value={values.surname}
                                          isValid={touched.surname && !errors.surname}
                                          isInvalid={!!errors.surname}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.surname}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Имя
                            </Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите имя"
                                          name="firstName"
                                          id="firstName"
                                          onChange={handleChange}
                                          value={values.firstName}
                                          isValid={touched.firstName && !errors.firstName}
                                          isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Отчество
                            </Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите отчество"
                                          name="lastName"
                                          id="lastName"
                                          onChange={handleChange}
                                          value={values.lastName}
                                          isValid={touched.lastName && !errors.lastName}
                                          isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Дата рождения
                            </Form.Label>
                            <Form.Control type="date"
                                          placeholder="Введите дату рождения"
                                          name="birthday"
                                          id="birthday"
                                          onChange={handleChange}
                                          value={values.birthday}
                                          isValid={touched.birthday && !errors.birthday}
                                          isInvalid={!!errors.birthday}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.birthday}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Табельный номер
                            </Form.Label>
                            <Form.Control type="number"
                                          placeholder="Введите табельный номер"
                                          name="serviceNumber"
                                          id="serviceNumber"
                                          onChange={handleChange}
                                          value={values.serviceNumber}
                                          isValid={touched.serviceNumber && !errors.serviceNumber}
                                          isInvalid={!!errors.serviceNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.serviceNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Должность
                            </Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите должность"
                                          name="positionEmp"
                                          id="positionEmp"
                                          onChange={handleChange}
                                          value={values.positionEmp}
                                          isValid={touched.positionEmp && !errors.positionEmp}
                                          isInvalid={!!errors.positionEmp}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.positionEmp}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Подразделение
                            </Form.Label>
                            <Form.Control type="text"
                                          placeholder="Введите подразделение"
                                          name="division"
                                          id="division"
                                          onChange={handleChange}
                                          value={values.division}
                                          isValid={touched.division && !errors.division}
                                          isInvalid={!!errors.division}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.division}
                            </Form.Control.Feedback>
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
        employeesStore: state
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
