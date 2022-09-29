import { REMOVE_ITEM, ADD_ITEM, EDIT_ITEM, FILTER_BY_CREATING_DATE, FILTER_BY_UPDATE_DATE,  } from "./actions";

const startState = {
    data: [
        { 
            id: '1',
            title: 'Supermarket',
            description: 'Buy vegetables and fruit',
            status: 'Open',
            creation_date: new Date('2022-09-17').toISOString().split('T')[0],
            update_date: new Date('2022-09-18').toISOString().split('T')[0],
          },
        
          { 
            id: '2',
            title: 'Cinema',
            description: 'Go to the cinema',
            status: 'In Progress',
            creation_date: new Date('2022-09-14').toISOString().split('T')[0],
            update_date: new Date('2022-09-16').toISOString().split('T')[0],
          },
        
          { 
            id: '3',
            title: 'Pills',
            description: 'Take some pills',
            status: 'Open',
            creation_date: new Date('2022-09-18').toISOString().split('T')[0] ,
            update_date: new Date('2022-09-20').toISOString().split('T')[0],
          },
        
          { 
            id: '4',
            title: 'Birthday Party',
            description: 'Go to the birthday party',
            status: 'Done',
            creation_date: new Date('2022-09-15').toISOString().split('T')[0],
            update_date: new Date('2022-09-22').toISOString().split('T')[0],
          }
    ]
}


export const reducer = (state = startState, action) => {
    //console.log('state', state);
    //console.log('action', action);
    switch (action.type) {
        case REMOVE_ITEM:
            return {
                ...state,
                data: state.data.filter(e => e.id !== action.itemId),
            }
        case ADD_ITEM: 
            return {
                ...state,
                data: [...state.data, action.item],
            }
        case EDIT_ITEM: 
            return {
                ...state,
                data: state.data.map(element => {
                    if (element.id === action.item.id){
                        return action.item;
                    } else {
                        return element;
                    }
                })
            }
        case FILTER_BY_CREATING_DATE:
            return {
                ...state,
                data: [...state.data].sort((a, b) => new Date(a.creation_date) - new Date(b.creation_date))
            }
        case FILTER_BY_UPDATE_DATE:
            return {
                ...state,
                data: [...state.data].sort((a, b) => new Date(a.update_date) - new Date(b.update_date))
            }
        default:
            return state;
    }
}