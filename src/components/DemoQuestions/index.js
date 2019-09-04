import React, { Component } from 'react';

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Breadcrumb,
  Label,
  Menu,
  Table,
  List,
  Form,
  Container,
  Checkbox
} from "semantic-ui-react";
import './index.css'

class Questions extends Component {
  state = {
    mcq1: "",
    mcq2: "",
    mcq3: "",
    mcq4: "",
    r1: '',
    r2: '',
    r3: '',
    dropdownMenuStyle: {
      display: "none"
    }
  };

  componentDidMount() {

    const { data } = this.props.location

    this.setState({
      r1: this.props.location.state.r1,
      r2: this.props.location.state.r2,
      r3: this.props.location.state.r3
    });
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



  handleSubmit = () => {

    // const postData = {
    //   assignmentId: '5d3c893e40153fab1ced3111',
    //   studentId: '5d3c3f54fb94653a5c4a7403',
    //   skillsRating: [{
    //     skillName: 'MongoDb',
    //     value: 3
    //   }, {
    //     skillName: 'Javascript',
    //     value: 4
    //   }, {
    //     skillName: 'GCP',
    //     value: 1
    //   }],
    //   mcqAnswers: [{
    //     questionId: '5d3c893e40153fab1ced3113',
    //     answer: 'A',
    //   }, {
    //     questionId: '5d3c893e40153fab1ced3113',
    //     answer: 'B',
    //   }, {
    //     questionId: '5d3c893e40153fab1ced3113',
    //     answer: 'C',
    //   }]
    // };

    // console.log(JSON.stringify(postData));

    // let headers = new Headers({
    //   'Content-Type': 'application/json'
    // });

    // console.log('do fetch');

    // fetch("https://cerealkillers-api.herokuapp.com/api/v1/answer", {
    //   method: 'post',
    //   body: JSON.stringify(postData),
    //   headers: headers
    // })
    //   .then(resp => {
    //     console.log(resp);
    //     if(resp.status === 201)
    //     window.location.href="/success";
    //   })
    window.location.href="/success";
  }

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
                <Breadcrumb style={{ paddingLeft: '10px', paddingTop: '10px' }}>
                  <Breadcrumb.Section link>  COSC 2321</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>Assignments</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>Cloud Computing Part A</Breadcrumb.Section>

                </Breadcrumb>
                <Header style={{ paddingTop: '10px', width: '90%', margin: 'auto' }} size="medium">

                </Header>

              </Grid.Row>
              <div style={{ clear: 'both', width: '100%' }}>
                <Container fluid>
                <div>
     <h1>Assignment 1: Cloud Computing Part A (30%)</h1></div>
    <hr/>
    <div>
        <p> Due date: 27 June by 20:29 Points: 8500 Submission: None</p>
        <p>  Not funny Thuy !!  What the hell is this? Text me 0481187062 to give you my Resume! Thuy that la hai huoc va xinh dep nua hihi. Hi vong giam khao se cham bai nay diem that caoooooo
             Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. </p>

    </div>
                </Container>
                <br></br>
                <br>
                </br>

                <Grid.Row>
                  <Container fluid>
                    <Header as='h2' style={{ color: 'red' }}>Technical Questions</Header>
                  </Container>
                  <Divider />
                  <Container textAlign='left'>Due: 13th August | 4 Questions </Container>
                  <Divider />
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      Question 1: <p className="questionTitle">The section contains questions and answers on oops basic concepts, objects, classes, oops features, polymorphism, encapsulation and abstraction.</p>
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='OOPs Basic Concepts'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Encapsulation'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
                                        <Form.Field>
                      <Checkbox
                        radio
                        label='Polymorphism'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
                    <Form.Field>
                      Question 2: <p className="questionTitle">The section contains questions on constructors and its types, copy constructor, overloading constructors, destructors, execution of constructor or destructor.</p>
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Copy Constructor'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Types of Constructors'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
              
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Overloading Constructors'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
                    <Form.Field>
                      Question 3: <p className="questionTitle">The section contains questions and answers on access specifiers, private, public and protected access Specifiers.</p>
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Private Access Specifier'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Public Access Specifier'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
              
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Protected Access Specifier'
                        name='checkboxRadioGroup'
                      />
                    </Form.Field>
               
                    <br></br>
                    <Button primary>Submit</Button>
                  </Form>

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