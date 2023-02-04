import * as declarationDetails from './actions';

export const addDeclarationDetails = (data) => {
    return {
        type : declarationDetails.ADD_DECLARATION_DETAILS,
        payload : data
    }
}