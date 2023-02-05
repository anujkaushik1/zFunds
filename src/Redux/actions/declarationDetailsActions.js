import * as declarationDetails from './actions';

export const addDeclarationDetails = (data) => {
    return {
        type : declarationDetails.ADD_DECLARATION_DETAILS,
        payload : data
    }
}

export const deleteDeclarationDetails = () => {
    return {
        type : declarationDetails.DELETE_DECLARATION_DETAILS
    }
}