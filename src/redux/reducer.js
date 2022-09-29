import { combineReducers } from "redux";

import {reducer as TodoListReducer} from './todoList/reducer';
import {reducer as AppReducer} from './app/reducer';

export const mainReducer = combineReducers({todo: TodoListReducer, app: AppReducer});