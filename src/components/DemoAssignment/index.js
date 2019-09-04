import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import {Link} from 'react-router-dom'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Breadcrumb,
  Label,
  Menu,
  Table,
  List,
  Image
} from "semantic-ui-react";
 import './index.css'

class Assignment extends Component {
  state = {
    courseId:'',
    dropdownMenuStyle: {
      display: "none"
    }
   
  };
componentDidMount() {
  this.setState ({
    courseId:this.props.location.state.courseId,
})

console.log(this.props.location.state.courseId);


}

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
            <Image style={{ maxWidth: '40px', paddingRight: '5px' }} src='https://react.semantic-ui.com/logo.png' />iGroup Assignment
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a"  onClick={this.logout}>Logout</Menu.Item>
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
              <Menu.Item as="a">
                Dashboard
              </Menu.Item>
              <Menu.Item active as="a">Assignments</Menu.Item>
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
            <Grid>
              <Grid.Row>
                <Breadcrumb>
    <Breadcrumb.Section style={{paddingLeft:'10px', paddingTop:'10px'}} link>  COSC 2321</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Assignments</Breadcrumb.Section>
  </Breadcrumb>
              </Grid.Row>
              <Header dividing size="huge" as="h1">
                  Cloud Computing Assignments
                </Header>
              <div style={{width:'100%'}}>
              <List divided relaxed>
   <List.Item>
          <Link to="rating"
           to={{
            pathname: "/rating",
            data: this.state, // your data array of objects
            state: {
              courseId:'5d3c893e40153fab1ced3111'
            }
          }}

          >
  <List> 1. Cloud Computing Assignment 1 <Label size='small' color='red' pointing='left'>
        Due 22/07/19
      </Label> </List>
  </Link>
</List.Item>
<List.Item>
          <Link to="rating"
           to={{
            pathname: "/rating",
            data: this.state, // your data array of objects
            state: {
              courseId:'5d3c893e40153fab1ced3111'
            }
          }}

          >
  <List> 1. Cloud Computing Assignment 2 <Label size='small' color='red' pointing='left'>
        Due 30/07/19
      </Label> </List>
  </Link>
</List.Item>
   <List.Item>
          <Link to="rating"
           to={{
            pathname: "/rating",
            data: this.state, // your data array of objects
            state: {
              courseId:'5d3c893e40153fab1ced3111'
            }
          }}

          >
  <List> 1. Cloud Computing Assignment 3 <Label size='small' color='red' pointing='left'>
        Due 03/08/19
      </Label> </List>
  </Link>
</List.Item>

              
  </List>
              {/* <Grid.Row>
              <List.Item>
      <label>1.</label><List.Item style={{ paddingLeft:'10px', float:'right'}}
      content={<a href='mailto:jack@semantic-ui.com'> Assignment 1: AWS --20%</a>}
    />
    </List.Item>
 
 
                  </Grid.Row>
                  <Grid.Row>
                  <List.Item>
      <label>2.</label><List.Item style={{ paddingLeft:'10px', float:'right'}}
      content={<a href='mailto:jack@semantic-ui.com'>Assignment 2: Devops --30%</a>}
    />
    </List.Item>
                      </Grid.Row>
                  <Grid.Row>
      <List.Item>
      <label>3.</label><List.Item style={{ paddingLeft:'10px', float:'right'}}
      content={<a href='mailto:jack@semantic-ui.com'> Assignment 3: CI/CD --50%</a>}
    />
    </List.Item>
                  </Grid.Row></div> */}
                  </div>
             </Grid>

             
             
             </Grid.Column>
             </Grid>
      </div>
    );
  }
}

export default Assignment;
