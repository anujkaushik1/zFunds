
import * as personalDetails from '../actions/actions';

// initial state of the store


const intialState = {
    data : {}
} 

// personal details reducer function to handle the ADD_PERSONAL_DETAILS and DELETE_PERSONAL_DETAILS actions


const personalDetailsReducer = (state =  intialState, action) => {

    switch(action.type){
        case personalDetails.ADD_PERSONAL_DETAILS:
            let payload = action.payload;
            return {
                ...state,
                data : payload
            }

        case personalDetails.DELETE_PERSONAL_DETAILS : 
            return {
                data : {}
            }
        
        default:
            return state

    }

}

export default personalDetailsReducer;