import {createStore} from 'redux';

import {mainReducer} from './reducer';

export const store = createStore(mainReducer);




//console.log('Store', store.getState());

