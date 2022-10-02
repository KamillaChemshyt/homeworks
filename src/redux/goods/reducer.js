import { 
    GET_LIST_SUCCESS, 
    GET_LIST_REQUEST, 
    GET_LIST_FAILED, 
    CREATE_ITEM_REQUEST, 
    CREATE_ITEM_SUCCESS, 
    CREATE_ITEM_FAILED,
    REMOVE_ITEM_REQUEST,
    REMOVE_ITEM_SUCCESS, 
    REMOVE_ITEM_FAILED,
    SAVE_ITEM_REQUEST,
    SAVE_ITEM_SUCCESS,
    SAVE_ITEM_FAILED,
    FILTER_BY_TITLE,
    FILTER_BY_WEIGHT,
    FILTER_BY_DESCRIPTION,
    FILTER_BY_CATEGORY,
} from "./actions";

const startState = {
    data: [],
    dataLoading: false,
    dataAdding: false,
    itemRemoving: {},
    itemUpdating: {},
    filter: '',
}


export const reducer = (state = startState, action) => {
    switch (action.type) {
        case GET_LIST_SUCCESS: 
            return {
                ...state,
                data: action.list,
                dataLoading: false,
            }
        case GET_LIST_REQUEST: 
            return {
                ...state,
                dataLoading: true,
                error: null,
            }
        case GET_LIST_FAILED: 
            return {
                ...state,
                data: [],
                error: action.error,
                dataLoading: false,
            }




        case CREATE_ITEM_REQUEST: 
            return {
                ...state,
                error: null,
                dataAdding: true,
        }
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                dataAdding: false, 
                data: [...state.data, action.item],
            }
        case CREATE_ITEM_FAILED:
            return {
                ...state,
                dataAdding: false,
                error: action.error,
            }




            case REMOVE_ITEM_REQUEST: 
            return {
                ...state,
                error: null,
                itemRemoving: {
                    ...state.itemRemoving,
                    [action.itemId] : true,
                },
        }
        case REMOVE_ITEM_SUCCESS:
            return {
                ...state,
                itemRemoving: {
                    ...state.itemRemoving,
                    [action.itemId] : false,
                },
                data: state.data.filter(i => i.id !== action.itemId),
            }
        case REMOVE_ITEM_FAILED:
            return {
                ...state,
                itemRemoving: {
                    ...state.itemRemoving,
                    [action.itemId] : false,
                },
                error: action.error,
            }




            case SAVE_ITEM_REQUEST: 
            return {
                ...state,
                error: null,
                itemUpdating: {
                    ...state.itemUpdating,
                    [action.item.id] : true,
                },
        }
        case SAVE_ITEM_SUCCESS:
            return {
                ...state,
                itemUpdating: {
                    ...state.itemUpdating,
                    [action.item.id] : false,
                },
                data: state.data.map(i => { 
                        if (i.id === action.item.id) {
                            return action.item;
                        }
                        return i;
                    }),
            }
        case SAVE_ITEM_FAILED:
            return {
                ...state,
                itemUpdating: {
                    ...state.itemUpdating,
                    [action.item.id] : false,
                },
                error: action.error,
            }





            case FILTER_BY_TITLE: 
                return {
                    ...state,
                    data: [...state.data].sort((a,b) => {
                        if (a.title > b.title) {
                            return 1;
                        } else if (a.title < b.title) {
                            return -1;
                        } 
                        return 0;
                    })
                }
            case FILTER_BY_WEIGHT: 
                return {
                    ...state,
                    data: [...state.data].sort((a,b) => {
                        if (a.weight > b.weight) {
                            return 1;
                        } else if (a.weight < b.weight) {
                            return -1;
                        } 
                        return 0;
                    })
                }
            case FILTER_BY_DESCRIPTION: 
                return {
                    ...state,
                    data: [...state.data].sort((a,b) => {
                        if (a.description > b.description) {
                            return 1;
                        } else if (a.description < b.description) {
                            return -1;
                        } 
                        return 0;
                    })
                }
            case FILTER_BY_CATEGORY: 
                return {
                    ...state,
                    data: [...state.data].sort((a,b) => {
                        if (a.category > b.category) {
                            return 1;
                        } else if (a.category < b.category) {
                            return -1;
                        } 
                        return 0;
                    })
                }




            
        default:
            return state;
    }
}