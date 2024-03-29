import React, {useState} from "react";
import { connect } from "react-redux";
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';
import { useHistory, withRouter } from "react-router";
import validationSchema from "./validationSchema";
import {compose} from "redux";

import employeeActions from '../reducers/employeeActions'

function EmpForm(props) {
    let history = useHistory();
    const [submitAction, setSubmitAction] = useState(null);
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
                    setSubmitting(true);
                    props.onAddEmp(values);
                    resetForm();
                    setSubmitting(false);
                if(submitAction === 'saveAndTransition') {
                    history.push('/');
                }
            }}
        >
            {({values, errors, touched, handleChange, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label column={1}>
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
                    <Form.Label column={1}>
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
                    <Form.Label column={1}>
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
                    <Form.Label column={1}>
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
                    <Form.Label column={1}>
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
                    <Form.Label column={1}>
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
                    <Form.Label column={1}>
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
                            handleSubmit();
                        }}>
                            Сохранить и добавить еще
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={() => {
                            setSubmitAction('saveAndTransition');
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

export default compose(
    withRouter,
    connect(
    state => ({
        employeesStore: state
    }),
    dispatch => ({
        onAddEmp: (emp) => {
            dispatch({
                type: employeeActions.addEmployee,
                payload: emp
            })
        }
    })
))(EmpForm);
