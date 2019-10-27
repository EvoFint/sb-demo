import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';

class EmpForm extends Component {
    addEmp() {
        // console.log(value);
        // this.props.onAddEmp
    };

    render() {
        // const surnameControl = (props) => <FormControl type="text" placeholder="Введите фамилию" {...props}/>;
        // const firstNameControl = (props) => <FormControl type="text" placeholder="Введите имя" {...props}/>;
        // const patronymicControl = (props) => <FormControl type="text" placeholder="Введите отчество" {...props}/>;
        // const birthdayControl = (props) => <FormControl type="date" placeholder="Введите дату рождения" {...props}/>;
        // const serviceNumberControl = (props) => <FormControl type="number" placeholder="Введите табельный номер" {...props}/>;
        // const positionControl = (props) => <FormControl type="text" placeholder="Введите должность" {...props}/>;
        // const divisionControl = (props) => <FormControl type="text" placeholder="Введите подразделение" {...props}/>;

        return (
            <Formik initialValues={{
                surname: "",
                firstName: "",
                patronymic: "",
                birthday: "",
                serviceNumber: "",
                positionEmp: "",
                division: ""
            }}>
                {({values, errors, touched, handleChange}) => (
                    <Form>
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
                                <Button variant="dark" type="submit">
                                    Сохранить и добавить еще
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="secondary">
                                    Сохранить и перейти к списку
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                )}
            </Formik>
            // {/*<Form*/}
            // {/*    model="emp"*/}
            // {/*    onSubmit={(emp) => {this.props.onAddEmp(this,emp.surname)}}*/}
            // {/*>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.surname">Фамилия</label>*/}
            // {/*        <Control.custom model="emp.surname" id="emp.surname" component={surnameControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.firstName">Имя</label>*/}
            // {/*        <Control.custom model="emp.firstName" id="emp.firstName" component={firstNameControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.patronymic">Отчество</label>*/}
            // {/*        <Control.custom model="emp.patronymic" id="emp.patronymic" component={patronymicControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.birthday">Дата рождения</label>*/}
            // {/*        <Control.custom model="emp.birthday" id="emp.birthday" component={birthdayControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.serviceNumber">Табельный номер</label>*/}
            // {/*        <Control.custom model="emp.serviceNumber" id="emp.serviceNumber" component={serviceNumberControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.position">Должность</label>*/}
            // {/*        <Control.custom model="emp.position" id="emp.position" component={positionControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <FormGroup>*/}
            // {/*        <label htmlFor="emp.division">Подразделение</label>*/}
            // {/*        <Control.custom model="emp.division" id="emp.division" component={divisionControl}/>*/}
            // {/*    </FormGroup>*/}
            // {/*    <Row>*/}
            // {/*        <Col>*/}
            // {/*            <Button variant="dark" type="submit">*/}
            // {/*                Сохранить и добавить еще*/}
            // {/*            </Button>*/}
            // {/*        </Col>*/}
            // {/*        <Col>*/}
            // {/*            <Button variant="secondary">*/}
            // {/*                Сохранить и перейти к списку*/}
            // {/*            </Button>*/}
            // {/*        </Col>*/}
            // {/*    </Row>*/}
            // {/*</Form>*/}
        )
    }
}

export default connect(
    state => ({
        empoyeesStore: state
    }),
    dispatch => ({
        onAddEmp: (empName) => {
            dispatch({
                type: 'ADD_EMPLOYEE',
                payload: empName
            })
        }
    })
)(EmpForm);
