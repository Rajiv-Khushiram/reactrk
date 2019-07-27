import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './components/DemoDashboard';
import Assignments from './components/DemoAssignment';
import Tasks from './components/DemoTasks';
import Questions from './components/DemoQuestions';
import Rating from './components/DemoRating';
import Success from './components/DemoSuccess';
import Result from './components/DemoResult';

ReactDOM.render(
    
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact={true} path='/' component={App}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/assignments' component={Assignments}/>
            <Route path='/tasks' render={() => <Tasks />}/>
            <Route path='/questions' render={() => <Questions />}/>
            <Route path='/rating' render={() => <Rating />}/>
            <Route path='/success' render={() => <Success/>}/>
            <Route path='/result' render={() => <Result />}/>
            
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
