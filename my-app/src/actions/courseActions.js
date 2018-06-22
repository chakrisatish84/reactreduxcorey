import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){    
    return { type: types.Load_Courses_Success, courses};
}

export function loadCourses() {
 return function(dispatch){
     return courseApi.getAllCourses().then(courses =>{
         dispatch(loadCoursesSuccess(courses));
     }).catch(error => {
         throw(error);
     });
 }
}