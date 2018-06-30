import React from 'react';
import {PropTypes} from'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, context){
        super(props,context)

        this.state ={
            course: Object.assign({}, this.props.course),
            errors: {},
            loading: false
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
           
    }
    componentWillReceiveProps(nextProps){
      if(this.props.course.id !== nextProps.course.id){
          this.setState({course:Object.assign({},nextProps.course)})
      }
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course:course});
    }

    saveCourse(event){
      event.preventDefault();
      if(this.props.courses.filter(course => course.title === this.state.course.title) <1 )
      {
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course).then(()=>this.redirect()).catch(error =>{
            toastr.error(error);
            this.setState({saving: false});
        });       
      }
      else{
        let errors = Object.assign({}, this.state.errors);
          errors.title = "this user already exists";
          this.setState({
              errors: errors
          })
      }
    }
    redirect()
    {
        this.setState({saving: false});
        toastr.success('Course Saved');
        this.context.router.push('/courses');
    }

    render() {         
        return (
            <div>
                <CourseForm
                  allAuthors={this.props.authors}
                  course={this.state.course}
                  errors={this.state.errors}
                  onChange={this.updateCourseState}
                  onSave = {this.saveCourse}
                  warningMessage={this.state.saveWarning}
                  loading={this.state.saving}
                />  
            </div>
          )
    }
}

ManageCoursePage.propTypes = {
//test
};

ManageCoursePage.contextTypes ={
    router : PropTypes.object
};

function getCourseById(courses,courseId){
  const course = courses.filter((course) => course.id === courseId);
  if(course.length) return course[0];
  return null;
}

function mapStateProps(state, ownProps){ 
    const courseId = ownProps.params.id;
       
    let course={id:'', watchHref:'', title:'', authorId:'', length:'', category: ''};

    if(courseId && state.courses.length>0){
        course = getCourseById(state.courses, courseId);
    }
    const authrosFormattedForDropdown = state.authors.map(author =>{
        return{
            value: author.id,
            text: author.firstName +' '+author.lastName
        };
    });
    return{
       course: course,
       authors: authrosFormattedForDropdown,
       courses: state.courses
    };
}

function mapDispatchToProps(dispatch){    
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}
 
export default connect(mapStateProps, mapDispatchToProps)(ManageCoursePage);