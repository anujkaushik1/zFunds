
import * as personalDetails from '../actions/actions';

const intialState = {
    data : {}
} 

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