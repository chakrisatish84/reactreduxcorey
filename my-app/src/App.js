import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
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

export default App;
