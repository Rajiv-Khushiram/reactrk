import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './components/DemoDashboard';
import Assignments from './components/DemoAssignment';
import Tasks from './components/DemoTasks';
import Questions from './components/DemoQuestions';
import Ratings from './components/DemoRating';
import Success from './components/DemoSuccess';
import Result from './components/DemoResult';
import MultipleChoice from './components/DemoMultipleChoice';

ReactDOM.render(
    
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={App}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/assignments' component={Assignments}/>
            <Route path='/tasks'  component={Tasks}/>
            <Route path='/questions'  component={Questions}/>
            <Route path='/rating' component={Ratings}/>
            <Route path='/success' component={Success}/>
            <Route path='/result' component={Result}/>
            
        </Switch>
        </BrowserRouter>
,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
