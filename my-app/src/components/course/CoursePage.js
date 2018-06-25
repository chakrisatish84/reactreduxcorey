import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList  from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
    constructor(props, context){
        super(props,context)
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render() { 
        const {courses} = this.props;       
        return (
            <div>
                <h1>courses</h1>
                <input type="submit" 
                    value="Add Course"
                    className="btn btn-primary"
                    onClick = {this.redirectToAddCoursePage} />
                <CourseList courses={courses}  />              
            </div>
          )
    }
}

function mapStateProps(state, ownProps){    
    return{
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){    
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}
 
export default connect(mapStateProps, mapDispatchToProps)(CoursePage);