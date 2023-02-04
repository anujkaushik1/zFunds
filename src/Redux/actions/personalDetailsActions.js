import * as personalDetails from './actions';

export const addPersonalDetails = (data) => {
    return {
        type : personalDetails.ADD_PERSONAL_DETAILS,
        payload : data
    }
}