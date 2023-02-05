
import * as declarationDetails from '../actions/actions';

// initial state of the store

const intialState = {
    data : {}
} 

// declaration details reducer function to handle the ADD_DECLARATION_DETAILS and DELETE_DECLARATION_DETAILS actions

const declarationDetailsReducer = (state =  intialState, action) => {

    switch(action.type){
        case declarationDetails.ADD_DECLARATION_DETAILS:
            let payload = action.payload;
            console.log(payload);
            return {
                ...state,
                data : payload
            }

        case declarationDetails.DELETE_DECLARATION_DETAILS:
            return {
                data : {}
            }
        
        default:
            return state

    }

}

export default declarationDetailsReducer;