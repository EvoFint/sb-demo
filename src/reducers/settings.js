const initialSettings = [{
    showSurname: true,
    showFirstName: true,
    showLastName: true,
    showBirthday: true,
    showServiceNumber: true,
    showPositionEmp: true,
    showDivision: true
}];

export default function settings(state = initialSettings, action) {
    if(action.type === 'CHANGE_SETTING') {
        return initialSettings[0] = action.payload
    }
    return state
}
