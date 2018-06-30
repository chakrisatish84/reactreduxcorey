import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Header from './components/common/Header';
import {connect} from 'react-redux';
import { stat } from 'fs';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        <div className="padding">
        {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
