import * as types from '../actions/actionTypes';

export default function courseReducer(state =[], action){
   switch(action.type){
       case types.Load_Courses_Success:       
         return  action.courses;
         
        default:
        return state;
   }
}