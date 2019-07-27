import React, {Component } from 'react'
import SearchExampleCategory from './searchbar.js'
import { Route , withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { createHashHistory } from 'history'
import './rating.scss'
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
    List,
    TextArea,
    Rating
  } from "semantic-ui-react";
  



class Ratings extends Component{
  constructor(props) {
  super(props)
  this.nextpage = this.nextpage.bind(this);
  this.state = {
        r1: '4',
        r2: '3',
        r3: '2', 

        dropdownMenuStyle: {
          display: "none",          
        }
      }
    }

 
    nextpage = () => { 
      console.log('do something')
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
    }  
    
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
                <Menu.Item as="a">Nav item</Menu.Item>
                <Menu.Item as="a">Nav item again</Menu.Item>
                <Menu.Item as="a">One more nav</Menu.Item>
                <Menu.Item as="a">Another nav item</Menu.Item>
                <Menu.Item as="a">More navigation</Menu.Item>
                <Divider hidden />
                <Menu.Item as="a">Macintoch</Menu.Item>
                <Menu.Item as="a">Linux</Menu.Item>
                <Menu.Item as="a">Windows</Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={13}
              computer={13}
              floated="right"
              id="content"
            ></Grid.Column>
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
                <div className='ratingSkills'>
                <h3>AWS </h3>
                <Rating id="q1"  maxRating={5} onChange={this.handleChange}  />
                <TextArea 
              id = 'comments' 
              rows={5}
              onChange = {this.handleChange} 
              style={{ width: '100%' }} 
              placeholder = 'Comments'
            />
    <br />
    <br />
       <h3>MongoDB </h3>
       <Rating  maxRating={5} onChange={this.handleFacilityRatingChange}  />
       <h3>Javascript </h3>
       <Rating maxRating={5}  onChange={this.handleStaffRatingChange}  />
       <h3>Google Cloud </h3>
       <Rating maxRating={5}  onChange={this.handleStaffRatingChange}  />
                <br>
                </br>
                <br></br>
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
> <Button>Next</Button></Link>
                  </div>
                  
                <br />
               
                
            </div>
            
            </Grid>
            </div>
        )
    }

}

export default Ratings;