import React from "react";
import {Col, Form, Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import validationSchema from "./validationSchema";

import employeeActions from "../reducers/employeeActions";

function ChanModal(props) {
    const {employeesStore, selectedId, handleClose} = props;
    const employeesStoreElement = employeesStore[selectedId];
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Изменение</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={{
                    surname: employeesStoreElement.surname,
                    firstName: employeesStoreElement.firstName,
                    lastName: employeesStoreElement.lastName,
                    birthday: employeesStoreElement.birthday,
                    serviceNumber: employeesStoreElement.serviceNumber,
                    positionEmp: employeesStoreElement.positionEmp,
                    division: employeesStoreElement.division
                }}
                        validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            props.onChangeEmp(selectedId,values);
                            resetForm();
                            setSubmitting(false);
                            handleClose();
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
                                    <Button variant="dark" block onClick={() => {
                                        handleSubmit();
                                    }}>
                                        Сохранить
                                    </Button>
                                </Col>
                                <Col>
                                    <Button variant="secondary" block onClick={() => {
                                        handleClose();
                                    }}>
                                        Отмена
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </div>
    )
}


export  default connect(
    state => ({
        employeesStore: state.employees
    }),
    dispatch => ({
        onChangeEmp: (index, newValue) => {
            dispatch({
                type: employeeActions.changeEmployee,
                payloadIndex: index,
                payloadValue: newValue
            })
        }
    })
)(ChanModal);
