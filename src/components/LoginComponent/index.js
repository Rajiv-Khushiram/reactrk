
import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
class LoginForm extends Component{
// const LoginForm = () => (
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  }

  validateForm() {
    // var password
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    if(email && password){
        this.setState({email: email.value, password: password.value})
    }
    if(this.state.email === "hackathon@gmail.com" && this.state.password === "hackathon"){
        window.location.href = "/dashboard";
    }
    else{
        alert("Login Failt!!")
        console.log(this.state.email);
        console.log(this.state.password);
    }
    event.preventDefault();
  }
  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
              <Form.Input
                fluid
                icon='lock'
                id="password"
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
              />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
              {/* <Link className="anchors" to="/dashboard" color='teal' fluid size='large'>Login</Link> */}
              {/* <Link className="anchors" to="/">Back To All Tickets</Link> */}
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
        </Grid>
        </form>
      </div>
    )
  }

  
// )
}
export default LoginForm