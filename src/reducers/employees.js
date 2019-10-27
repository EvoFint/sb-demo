
export default function employees(state = ['pepega'], action) {
    if (action.type === 'ADD_EMPLOYEE') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'CHANGE_EMPLOYEE') {
        return state;
    } else if (action.type === 'DELETE_EMPLOYEE') {
        return state;
    }
    return state
}
