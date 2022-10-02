export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILED = 'GET_LIST_FAILED';

export const CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_FAILED = 'CREATE_ITEM_FAILED';


export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILED = 'REMOVE_ITEM_FAILED';


export const SAVE_ITEM_REQUEST = 'SAVE_ITEM_REQUEST';
export const SAVE_ITEM_SUCCESS = 'SAVE_ITEM_SUCCESS';
export const SAVE_ITEM_FAILED = 'SAVE_ITEM_FAILED';



export const FILTER_BY_TITLE = 'FILTER_BY_TITLE';
export const FILTER_BY_WEIGHT = 'FILTER_BY_WEIGHT';
export const FILTER_BY_DESCRIPTION = 'FILTER_BY_DESCRIPTION';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';



export const getListRequest = () => ({
    type: GET_LIST_REQUEST,
});

export const getListSuccess = (list) => ({
    type: GET_LIST_SUCCESS,
    list,
});


export const getListFailed = (error) => ({
    type: GET_LIST_FAILED,
    error: error,
});







export const removeItemRequest = (itemId) => ({
    type: REMOVE_ITEM_REQUEST,
    itemId,
});

export const removeItemSuccess = (itemId) => ({
    type: REMOVE_ITEM_SUCCESS,
    itemId,
});


export const removeItemFailed = (error, itemId) => ({
    type: REMOVE_ITEM_FAILED,
    error: error,
    itemId,
});







export const createItemRequest = () => ({
    type: CREATE_ITEM_REQUEST,
});

export const createItemSuccess = (item) => ({
    type: CREATE_ITEM_SUCCESS,
    item,
});


export const createItemFailed = (error) => ({
    type: CREATE_ITEM_FAILED,
    error: error,
});









export const saveItemRequest = (item) => ({
    type: SAVE_ITEM_REQUEST,
    item,
});

export const saveItemSuccess = (item) => ({
    type: SAVE_ITEM_SUCCESS,
    item,
});


export const saveItemFailed = (error, item) => ({
    type: SAVE_ITEM_FAILED,
    error: error,
    item,
});





export const filterByTitle = (itemData) => {
    return {
        type: FILTER_BY_TITLE,
        item: itemData,
    }
}



export const filterByWeight = (itemData) => {
    return {
        type: FILTER_BY_WEIGHT,
        item: itemData,
    }
}



export const filterByDescription = (itemData) => {
    return {
        type: FILTER_BY_DESCRIPTION,
        item: itemData,
    }
}



export const filterByCategory = (itemData) => {
    return {
        type: FILTER_BY_CATEGORY,
        item: itemData,
    }
}



