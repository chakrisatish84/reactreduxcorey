import * as types from '../actions/actionTypes'
import { stat } from 'fs';
export default function authorReducer(state =[], action){
 switch(action.type){
     case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
      default:
      return state;
 }
}