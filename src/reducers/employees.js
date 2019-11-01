const initialEmployee = {
  surname: 'Иванов',
  firstName: 'Иван',
  lastName: 'Иванович',
  birthday: '1988-01-10',
  serviceNumber: '001872',
  positionEmp: 'Заместитель директора',
  division: 'Отдел контроля качества'
};

export default function employees(state = [initialEmployee], action) {
    if (action.type === 'ADD_EMPLOYEE') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'CHANGE_EMPLOYEE') {
        return state;
    } else if (action.type === 'DELETE_EMPLOYEE') {
        console.log(action.payload);
        console.log(state);
        let newState = state.filter((it, index) => index != action.payload);
        console.log(newState);
        return newState
    }
    return state
}
