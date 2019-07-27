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
                Project name
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

            <div>
                <div className='searchbar'><SearchExampleCategory /></div>
                <div><h1 className='assignmentheader'>Assignment 1: APPLE</h1></div>
                <hr/>
                <div className='randomtext'>
                    <p> Due date: 27 June by 20:29 Points: 8500 Submission: None</p>
                    <p> Thuy that la hai huoc va xinh dep nua hihi. Hi vong giam khao se cham bai nay diem that caoooooo
                         Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. </p>
 
                </div>
                <h2 className='header'> Please Choose How Petent You Are With These Skills</h2>
                <h3 className='technicalskill'> Technical skills</h3>
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
> <Button>Next</Button></Link></div>
                <br />
               
            </div>
            </Grid>
            </div>
        )
    }

}

export default Ratings;