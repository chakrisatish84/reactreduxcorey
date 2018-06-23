import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state =initialState.authors, action){
   switch(action.type){
       case types.LOAD_COURSES_SUCCESS:       
         return  action.courses;

        default:
        return state;
   }
}