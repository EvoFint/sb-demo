import employeeActions from './employeeActions'

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
    if (action.type === employeeActions.addEmployee) {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === employeeActions.changeEmployee) {
        console.log(action.payloadIndex, action.payloadValue);
        let newState = state.map(((value, index) => {
            if(index == action.payloadIndex) {
                return action.payloadValue
            } else {
                return value
            }
        }));
        console.log(newState);
        return newState;
    } else if (action.type === employeeActions.deleteEmployee) {
        let newState = state.filter((it, index) => index != action.payload);
        return newState
    }
    return state
}
