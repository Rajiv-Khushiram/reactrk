import React, {Component } from 'react';
import ButtonExamplePositive from './button';
import SearchExampleCategory from './searchbar';
import './index.scss';
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

class Success extends Component{


    state = {
        dropdownMenuStyle: {
          display: "none"
        }
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
        </br><h1>Assignment 1: Cloud Computing Part A (30%)</h1></div>
      <hr/>
      <div>
          <p> Due date: 27 June by 20:29 Points: 8500 Submission: None</p>
          <p>  Not funny Thuy !!  What the hell is this? Text me 0481187062 to give you my Resume! Thuy that la hai huoc va xinh dep nua hihi. Hi vong giam khao se cham bai nay diem that caoooooo
               Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. </p>
  
      </div>
      <div >
                <div className='text'> 
                <br></br>
                    <h1 style={{color:'red'}} >Congratulations! </h1>
                    <a href="/result"><ButtonExamplePositive /></a>
                </div>
                <hr/>
            </div>
     
  </div>
  </Grid>
  </Grid.Column>
  </Grid>
            
              </div>




           
        )
    }

}

export default Success;