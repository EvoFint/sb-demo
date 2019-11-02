import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';
import settings from "../reducers/settings";

function SettingsForm(props) {
    const {appSettings} = props;
    return (
        <Formik initialValues={{
            showFirstName: appSettings.showFirstName,
            showSurname: appSettings.showSurname,
            showLastName: appSettings.showLastName,
            showBirthday: appSettings.showBirthday,
            showServiceNumber: appSettings.showServiceNumber,
            showPositionEmp: appSettings.showPositionEmp,
            showDivision: appSettings.showDivision
        }}
                onSubmit={(values) => {
                    props.onChangeSettings(values);
                    alert('Изменения сохранены!')
                }}>
            {
                ({values, handleChange, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showFirstName"
                                        label="Показывать имя"
                                        checked={values.showFirstName}
                                        value={values.showFirstName}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showSurname"
                                        label="Показывать фамилию"
                                        checked={values.showSurname}
                                        value={values.showSurname}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showLastName"
                                        label="Показывать отчество"
                                        checked={values.showLastName}
                                        value={values.showLastName}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showBirthday"
                                        label="Показывать дату рождения"
                                        checked={values.showBirthday}
                                        value={values.showBirthday}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showServiceNumber"
                                        label="Показывать табельный номер"
                                        checked={values.showServiceNumber}
                                        value={values.showServiceNumber}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showPositionEmp"
                                        label="Показывать должность"
                                        checked={values.showPositionEmp}
                                        value={values.showPositionEmp}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type="checkbox"
                                        name="showDivision"
                                        label="Показывать подразделение"
                                        checked={values.showDivision}
                                        value={values.showDivision}
                                        onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Сохранить изменения
                        </Button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default connect(
    state => ({
        appSettings: state.appSettings
    }),
    dispatch => ({
        onChangeSettings: (emp) => {
            dispatch({
                type: 'CHANGE_SETTING',
                payload: emp
            })
        }
    })
)(SettingsForm);
