import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    surname: Yup.string().min(1, 'Минимум 1 символ').max(255, 'Максимум 255 символов').required('Введите фамилию'),
    firstName: Yup.string().min(1, 'Минимум 1 символ').max(255, 'Максимум 255 символов').required('Введите имя'),
    lastName: Yup.string().min(1, 'Минимум 1 символ').max(255, 'Максимум 255 символов').required('Введите отчество'),
    birthday: Yup.date().required('Выберите дату'),
    serviceNumber: Yup.number().min(1,'Табельный номер должен быть не меньше 1').max(999999,'Табельный номер должен быть не больше 999999').required('Введите табельный номер'),
    positionEmp: Yup.string().min(1, 'Минимум 1 символ').max(255, 'Максимум 255 символов').required('Введите должность'),
    division: Yup.string().min(1, 'Минимум 1 символ').max(255, 'Максимум 255 символов').required('Введите подразделение')
});

export default validationSchema;
