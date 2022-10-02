import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {mainReducer} from './reducer';




  const logger  = store => next => action => {

        console.log('Action: ', action)
      
        const returnValue = next(action)

        console.log('new state: ', store.getState());
      
        return returnValue
  }
  




export const store = createStore(mainReducer, applyMiddleware(logger, thunk));




