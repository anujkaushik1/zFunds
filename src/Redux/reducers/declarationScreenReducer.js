
import * as declarationDetails from '../actions/actions';

const intialState = {
    data : {}
} 

const declarationDetailsReducer = (state =  intialState, action) => {

    switch(action.type){
        case declarationDetails.ADD_DECLARATION_DETAILS:
            let payload = action.payload;
            console.log(payload);
            return {
                ...state,
                data : payload
            }
        
        default:
            return state

    }

}

export default declarationDetailsReducer;