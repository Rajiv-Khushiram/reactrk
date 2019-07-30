import React, {Component } from 'react'
import SearchExampleCategory from './searchbar.js'
import './rating.scss'
import SkillComponent from './SkillComponent'
import { Link } from 'react-router-dom'
import ButtonRed from './button.js'
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
    Image,
    List
  } from "semantic-ui-react";
import './rating.scss'

class Ratings extends Component{
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
    render(){
        return (
            <div className="App">
          <Grid padded className="tablet computer only">
            <Menu borderless inverted fluid fixed="top">
              <Menu.Item header as="a">
              <Image style={{maxWidth:'40px', paddingRight:'5px'}} src='https://react.semantic-ui.com/logo.png' />iGroup Assignment
              </Menu.Item>
              <Menu.Menu position="right">
                {/* <Menu.Item>
                  <Input placeholder="Search..." size="small" />
                </Menu.Item> */}
                <Menu.Item as="a">Dashboard</Menu.Item>
                <Menu.Item as="a">Settings</Menu.Item>
                <Menu.Item as="a">Profile</Menu.Item>
                <Menu.Item as="a">Help</Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid>
          <Grid padded className="mobile only">
            <Menu borderless inverted fluid fixed="top">
              <Menu.Item header as="a">
              iGroup Assignment
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
      <Grid padded>

<div>
    <div>
    <Breadcrumb style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                  <Breadcrumb.Section link>  COSC 2321</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>Assignments</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>Cloud Computing Part A</Breadcrumb.Section>

                </Breadcrumb>
      <br>
      </br><h1>Assignment 1: Cloud Computing Assignment (30%) </h1></div>
    <hr/>
    <div>
        <p> Due date: 27 June by 20:29 Points: 8500 Submission: None</p>
        <p>  Not funny Thuy !!  What the hell is this? Text me 0481187062 to give you my Resume! Thuy that la hai huoc va xinh dep nua hihi. Hi vong giam khao se cham bai nay diem that caoooooo
             Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. </p>

    </div>
    <h3>Project Formation Requirements * </h3><hr/>
    <h4 className='header'>Rate your skills : </h4>
    <div className='ratingSkills'><SkillComponent /> 
    <Link
to={{
pathname: "/questions",
data: this.state, // your data array of objects
state: {
r1:'3',
r2:'4',
r3:'1'
}
}}
>
  <br></br> <Button>Next</Button></Link></div>
    <br />
   
</div>
</Grid>
</Grid.Column>
</Grid>
          
            </div>
        )
    }

}

export default Ratings;