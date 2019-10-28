import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';

class SettingsForm extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Formik initialValues={{
                showSurname: true,
                showLastName: true,
                showBirthday: true,
                showServiceNumber: true,
                showPositionEmp: true,
                showDivision: true
            }}
                    onSubmit={(values, setSubmitting) => {
                console.log(values);
                let settings = {
                    showSurname: values.showFirstName
                };
                console.log(values);
                this.props.onChangSet(settings);
            }}>
                {
                    ({values, handleChange, handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showFirstName"
                                            label="Показывать имя"
                                            checked={values.showFirstName}
                                            onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showSurname"
                                            label="Показывать фамилию"
                                            values={values.showSurname}
                                            onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showLastName"
                                            label="Показывать отчество"
                                            values={values.showLastName}
                                            onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showBirthday"
                                            label="Показывать дату рождения"
                                            values={values.showBirthday}
                                            onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showServiceNumber"
                                            label="Показывать табельный номер"
                                            values={values.showServiceNumber}
                                            onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showPositionEmp"
                                            label="Показывать должность"
                                            values={values.showPositionEmp}
                                            onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox"
                                            name="showDivision"
                                            label="Показывать подразделение"
                                            values={values.showDivision}
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
}

export default connect(
    state => ({
        settings: state.settings
    }),
    dispatch => ({
        onChangSet: (emp) => {
            dispatch({
                type: 'CHANGE_SETTING',
                payload: emp
            })
        }
    })
)(SettingsForm);
