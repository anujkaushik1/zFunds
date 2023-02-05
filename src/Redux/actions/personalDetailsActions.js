import * as personalDetails from './actions';

export const addPersonalDetails = (data) => {
    return {
        type : personalDetails.ADD_PERSONAL_DETAILS,
        payload : data
    }
}

export const deletePersonalDetails = () => {
    return {
        type : personalDetails.DELETE_PERSONAL_DETAILS
    }
}