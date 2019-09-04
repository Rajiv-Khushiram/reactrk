import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Breadcrumb,
  Table
} from "semantic-ui-react";
 import './index.css'

class Dashboard extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  logout = () => {
    window.location.href = "/";
  }

  render() {
    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
            <Image style={{maxWidth:'40px', paddingRight:'5px'}} src='https://react.semantic-ui.com/logo.png' />iGroup Assignment
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a" onClick={this.logout}>Logout</Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Help</Menu.Item>
              <Divider fitted />
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
              <Menu.Item active as="a">
                Overview
              </Menu.Item>
              <Menu.Item as="a">Assignments</Menu.Item>
              <Menu.Item as="a">Analytics</Menu.Item>
              <Menu.Item as="a">Export</Menu.Item>
              <Divider hidden />

            </Menu>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
              <Breadcrumb>
    <Breadcrumb.Section style={{paddingLeft:'10px', paddingTop:'10px'}} link>  Dashboard</Breadcrumb.Section>
    <Breadcrumb.Divider />

  </Breadcrumb>
                <Header dividing size="huge" as="h1">
                  Courses
                </Header>
              </Grid.Row>
              <Grid.Row textAlign="center">
                
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                  
                  <Link
  to={{
    pathname: "/assignments",
    data: this.state, // your data array of objects
    state: {
      courseId:'5d3c893e40153fab1ced3111'
    }
  }}
> <Button>Cloud Computing</Button>
                
                  </Link>
                  <p>COSC-3112</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                  <Link
  to={{
    pathname: "/assignments",
    data: this.state, // your data array of objects
    state: {
      courseId:'5d3c893e40153fab1ced3111'
    }
  }} >
  <Button>
                    Database Concepts
                    </Button>
                  </Link>
                  <p>COSC-1121</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                 <Link
  to={{
    pathname: "/assignments",
    data: this.state, // your data array of objects
    state: {
      courseId:'5d3c893e40153fab1ced3111'
    }
  }} >
  <Button>OO Software Design</Button>
                  </Link>
                  <p>COSC-2112</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                   <Link
  to={{
    pathname: "/assignments",
    data: this.state, // your data array of objects
    state: {
      courseId:'5d3c893e40153fab1ced3111'
    }
  }} >
       <Button>Internet of Things</Button>
                 
                  </Link>
                  <p>COSC-1112</p>
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
