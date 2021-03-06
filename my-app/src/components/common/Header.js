import * as React from 'react';
import {Link, IndexLink} from 'react-router';
import {PropTypes} from 'prop-types'
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';

const Header =({loading}) =>{
 return(
     <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
     </nav> 
 )
};

Header.propTypes ={
    loading: PropTypes.bool.isRequired
};

function mapStateProps(state, ownProps){
    return{
      courses: state.courses
    }
  }
  

export default connect(mapStateProps)(Header);