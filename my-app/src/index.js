import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
   <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
