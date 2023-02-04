
import * as personalDetails from '../actions/actions';

const intialState = {
    data : []
} 

const personalDetailsReducer = (state =  intialState, action) => {

    switch(action.type){

        case personalDetails.ADD_PERSONAL_DETAILS:
            break
        
        default:
            return state

    }

}

export default personalDetailsReducer;