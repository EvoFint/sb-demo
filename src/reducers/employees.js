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
    let newState;
    switch (action.type) {
        case employeeActions.addEmployee:
            return [
                ...state,
                action.payload
            ];
            break;
        case employeeActions.deleteEmployee:
            newState = state.filter((it, index) => index != action.payload);
            return newState;
            break;
        case employeeActions.changeEmployee:
            newState = state.map(((value, index) => {
                if(index == action.payloadIndex) {
                    return action.payloadValue
                } else {
                    return value
                }
            }));
            return newState;
            break;
        default:
            return state;
    }
    // if (action.type === employeeActions.addEmployee) {
    //     return [
    //         ...state,
    //         action.payload
    //     ];
    // } else if (action.type === employeeActions.changeEmployee) {
    //     let newState = state.map(((value, index) => {
    //         if(index == action.payloadIndex) {
    //             return action.payloadValue
    //         } else {
    //             return value
    //         }
    //     }));
    //     return newState;
    // } else if (action.type === employeeActions.deleteEmployee) {
    //     let newState = state.filter((it, index) => index != action.payload);
    //     return newState
    // }
    // return state
}
