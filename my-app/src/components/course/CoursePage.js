import React from 'react';
import {PropTypes} from'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';

class CoursePage extends React.Component {
    constructor(props, context){
        super(props,context)
        this.state = {
            course: {title: ''},
            saveWarning: false
        }

        this.onTitleCange = this.onTitleCange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    onTitleCange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState(
            {course:course}

        )
    }

    onClickSave(){
        debugger;
        this.state.saveWarning= false;
        if(this.props.courses.filter(course => course.title ==this.state.course.title) <1 ){
            this.props.actions.createCourse(this.state.course);
        this.state.course.title='';        
        }
        else{
            this.setState({
               saveWarning : true
            })
        }
    }

    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }

    render() {        
        return (
            <div>
                <h1>courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleCange}
                  value={this.state.course.title} />
                <input type="submit" value="save" onClick={this.onClickSave} />  
                {this.state.saveWarning && (<div>Duplicate </div>)}
            </div>
          )
    }
}

function mapStateProps(state, ownProps){
    debugger;
    return{
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){
    debugger;
    return {
        actions: bindActionCreators(courseAction, dispatch)
    }
}
 
export default connect(mapStateProps, mapDispatchToProps)(CoursePage);