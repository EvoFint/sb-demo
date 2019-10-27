import React, { Component } from "react";
import { Form, Control, actions } from 'react-redux-form';
import { FormLabel, FormControl } from 'react-bootstrap';

class EmpForm extends Component {

    render() {
        const surnameNameControl = (props) => <FormControl type="text" placeholder="Введите фамилию" {...props}/>;
        const firstNameControl = (props) => <FormControl type="text" placeholder="Введите имя" {...props}/>;
        const patronymicControl = (props) => <FormControl type="text" placeholder="Введите отчество" {...props}/>;
        const dateControl = (props) => <FormControl type="date" placeholder="Введите дату рождения" {...props}/>;
        const serviceNumberControl = (props) => <FormControl type="number" placeholder="Введите табельный номер" {...props}/>;
        const positionControl = (props) => <FormControl type="text" placeholder="Введите должность" {...props}/>;
        const divisionControl = (props) => <FormControl type="text" placeholder="Введите подразделение" {...props}/>;

        return (
            <Form
                model="emp"
                onSubmit={console.log('Pepega')}
            >
                <label htmlFor="emp.surnameName">Фамилия</label>
                <Control.text model="emp.surnameName" id="emp.surnameName" component={surnameNameControl}/>

                <label htmlFor="emp.firstName">Имя</label>
                <Control.text model="emp.firstName" id="emp.firstName" component={firstNameControl}/>

                <label htmlFor="emp.patronymic">Отчество</label>
                <Control.text model="emp.patronymic" id="emp.patronymic" component={patronymicControl}/>

                <label htmlFor="emp.date">Дата рождения</label>
                <Control.custom model="emp.date" id="emp.date" component={dateControl}/>

                <label htmlFor="emp.serviceNumber">Табельный номер</label>
                <Control.custom model="emp.serviceNumber" id="emp.serviceNumber" component={serviceNumberControl}/>

                <label htmlFor="emp.position">Должность</label>
                <Control.text model="emp.position" id="emp.position" component={positionControl}/>

                <label htmlFor="emp.division">Подразделение</label>
                <Control.text model="emp.division" id="emp.division" component={divisionControl}/>
            </Form>
        )
    }
}

export default EmpForm;
