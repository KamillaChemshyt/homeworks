import { combineReducers } from "redux";

import {reducer as AppReducer} from './app/reducer';
import {reducer as goodsReducer} from './goods/reducer';

export const mainReducer = combineReducers({
    app: AppReducer,
    goods: goodsReducer,
});