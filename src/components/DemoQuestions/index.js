import React, {Component } from 'react';

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
    Container
  } from "semantic-ui-react";
   import './index.css'

class Questions extends Component {
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
  
    render() {
      return (
        <div className="App">
          <Grid padded className="tablet computer only">
            <Menu borderless inverted fluid fixed="top">
              <Menu.Item header as="a">
                Project name
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input placeholder="Search..." size="small" />
                </Menu.Item>
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
            >
              <Grid>
                <Grid.Row>
                <Breadcrumb style={{paddingLeft:'10px'}}>
    <Breadcrumb.Section link>  COSC 2321</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Assignments</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>IOT: Medical Appointment System</Breadcrumb.Section>

  </Breadcrumb>
                  <Header style={{paddingTop:'10px', width:'90%', margin:'auto'}} size="medium">

                  </Header>
                  
                </Grid.Row>
                <div style={{clear:'both', width:'100%'}}>
                <Container fluid>
      <Header as='h2'>Medical Appointment System</Header>
      <p>
        Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
        ancestors, which would have been pack hunters with complex body language. These
        sophisticated forms of social cognition and communication may account for their
        trainability, playfulness, and ability to fit into human households and social situations,
        and these attributes have given dogs a relationship with humans that has enabled them to
        become one of the most successful species on the planet today.
      </p>
      <p>
        The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
        across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
        loads, protection, assisting police and military, companionship, and, more recently, aiding
        handicapped individuals. This impact on human society has given them the nickname "man's
        best friend" in the Western world. In some cultures, however, dogs are also a source of
        meat.
      </p>
    </Container>
               <br></br>
               <br>
               </br>
  
                <Grid.Row>
                <Container fluid>
      <Header as='h2'>Technical Questions</Header>
      </Container>
      <Divider/>
      <Container textAlign='left'>Due: 13th August | 4 Questions </Container>
      <Divider/>
                    </Grid.Row>
                    <Grid.Row>
                
                        </Grid.Row>
                    <Grid.Row>
        
                    </Grid.Row></div>
             
               </Grid>
  
               
               
               </Grid.Column>
               </Grid>
               </div>

      );
    }
  }
  
  export default Questions;