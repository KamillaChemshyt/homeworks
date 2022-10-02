import {requestGoods, createItem, deleteItem, saveItem} from '../../services/goodService';
import {
    getListSuccess, 
    getListRequest, 
    getListFailed,
    createItemRequest,
    createItemSuccess,
    createItemFailed,
    removeItemRequest,
    removeItemSuccess,
    removeItemFailed,
    saveItemRequest,
    saveItemSuccess,
    saveItemFailed
} from './actions';

export const fetchThunk = () => {
    return async (dispatch) => {
        dispatch(getListRequest());
        const response = await requestGoods();
        if(response.success){
            dispatch(getListSuccess(response.response.goods));
        } else {
            dispatch(getListFailed(response.error));
        }
    }
}



export const createThunk = (item) => {
    return async (dispatch) => {
        dispatch(createItemRequest(item));
        const response = await createItem(item);
        if(response.success){
            dispatch(createItemSuccess(response.response));
        } else {
            dispatch(createItemFailed(response.error));
        }
    }
}






export const removeThunk = (itemId) => {
    return async (dispatch) => {
        dispatch(removeItemRequest(itemId));
        const response = await deleteItem(itemId);
        if(response.success){
            dispatch(removeItemSuccess(itemId));
        } else {
            dispatch(removeItemFailed(response.error, itemId));
        }
    }
}






export const editThunk = (item) => {
    return async (dispatch) => {
        dispatch(saveItemRequest(item));
        const response = await saveItem(item);
        if(response.success){
            dispatch(saveItemSuccess(item));
        } else {
            dispatch(saveItemFailed(response.error, item));
        }
    }
}