import * as Yup from 'yup';

const minSymb = 'Минимум 1 символ';
const maxSymb = 'Максимум 255 символов';
const validationSchema = Yup.object().shape({
    surname: Yup.string().min(1, minSymb).max(255, maxSymb).required('Введите фамилию'),
    firstName: Yup.string().min(1, minSymb).max(255, maxSymb).required('Введите имя'),
    lastName: Yup.string().min(1, minSymb).max(255, maxSymb).required('Введите отчество'),
    birthday: Yup.date().required('Выберите дату'),
    serviceNumber: Yup.number().min(1,'Табельный номер должен быть не меньше 1').max(999999,'Табельный номер должен быть не больше 999999').required('Введите табельный номер'),
    positionEmp: Yup.string().min(1, minSymb).max(255, maxSymb).required('Введите должность'),
    division: Yup.string().min(1, minSymb).max(255, maxSymb).required('Введите подразделение')
});

export default validationSchema;
