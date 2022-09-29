import {v4 as uuidv4} from 'uuid';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const FILTER_BY_CREATING_DATE = 'FILTER_BY_CREATING_DATE';
export const FILTER_BY_UPDATE_DATE = 'FILTER_BY_UPDATE_DATE';


export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        itemId: id,
    }
}

export const addItem = (itemData) =>{
    return {
        type: ADD_ITEM, 
        item: {
            ...itemData,
            id: uuidv4() ,
            update_date: new Date().toISOString().split('T')[0],
        }
    }
}


export const editItem = (itemData) => {
    return {
        type: EDIT_ITEM,
        item: itemData,
    }
}





export const filterByCreatingDate = (itemData) => {
    return {
        type: FILTER_BY_CREATING_DATE,
        item: itemData,
    }
}



export const filterByUpdateDate = (itemData) => {
    return {
        type: FILTER_BY_UPDATE_DATE,
        item: itemData,
    }
}