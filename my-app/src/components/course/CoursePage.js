import React from 'react';
import {PropTypes} from'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList  from './CourseList'

class CoursePage extends React.Component {
    constructor(props, context){
        super(props,context)
           
    }
    render() { 
        const {courses} = this.props;       
        return (
            <div>
                <h1>courses</h1>
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