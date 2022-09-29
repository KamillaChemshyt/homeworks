import {SHOW_MODAL, CLOSE_MODAL} from './actions';


const initialState = {
    modalElementVisible: false,
    editItemId: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return {
                ...state,
                modalElementVisible: false,
            }
        case SHOW_MODAL: 
            return {
                ...state,
                modalElementVisible: true,
                editItemId: action.editItemId,
            }
        default:
            return state;
    }
}