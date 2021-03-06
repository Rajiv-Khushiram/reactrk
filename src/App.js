import React, { Component } from "react";
import _ from "lodash";
import './App.scss';
/*import Notification from './components/ClippathNotification'*/
/* import ModernNavigationBar from  './components/ModernNavigationbar' */
import Loader from "./components/Loader";
import { loaderStatus } from "./components/Utils/utilities";
import LoginForm from './components/LoginComponent'
import { Container,
  Segment,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive } from 'semantic-ui-react'
import $ from 'jquery';
import NavigationBar from './components/Navigationbar';
import HomepageLayout from './components/SemanticHomePage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
  }

  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

  componentWillMount() {
    console.log('executes before')
      loaderStatus.next(true); // Emitting false for loaderStatus to turn on loading screen

  }
  componentDidMount() {
    console.log('executes after')
    setTimeout(() => {
      loaderStatus.next(false); // Emitting false for loaderStatus to turn on loading screen 
    }, 1);
    setTimeout(() => {
    this.toggleVisibility()
  }, 1);
  }

  // currently adding loader
  render() {
    const { visible } = this.state
    return (
      
        <React.Fragment>
   <LoginForm />
             
        </React.Fragment>

    );
  }
}




export default App;
