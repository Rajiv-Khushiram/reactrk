import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import NavigationBar from  '../Navigationbar' 
import NavBar from '../Navbar'
import MenuNew from "../Menu"
import './index.css';


import {
    Card,
  Button, 
  Transition,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'



// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
  class HomepageHeading extends React.Component {
    state = {
        visible: false,
        calculations: {
          topVisible: false,
          bottomVisible: false,
          onScreen: false,
        }
        //...whatever construction you need
       }
    contextRef = createRef()

    handleUpdate = (e, { calculations }) => this.setState({ calculations })

    render() {
    const { mobile } = this.props
    const { calculations } = this.state
    return (
      <Visibility onUpdate={this.handleUpdate}
              updateOn='repaint'
            >
    <Transition visible={calculations.onScreen}  animation='tada' duration={1500}>
      <Header
      as='h1'
      inverted
      textAlign="center"
      content='Full Stack Developer'
      
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '0.0em' : '0em',
      }}
    />
    </Transition>
 </Visibility>


       )
    }
}


    
 


//     {/*<Header
//       as='h1'
//       content='Imagine-a-Company'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Do whatever you want when you want to.'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Button primary size='huge'>
//       Get Started
//       <Icon name='right arrow' />
//     </Button>/>*/}

 


HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
         
         <Segment
        style={{padding: '0em', background: 'black' }}
      >
            <HomepageHeading />
        </Segment>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
    state = { menuClass: "" };

  handleUpdate = (e, { calculations }) => {
    let menuClass;

    menuClass = calculations.bottomPassed === true && calculations.direction === "down"
      ? "fixed"
      : ""

    menuClass = calculations.bottomVisible === true && calculations.direction === "up"
      ? ""
      : "fixed"

    this.setState({ menuClass});
    
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {/* <MenuNew /> */}
            
        <Segment
        style={{background: 'black' }}
      >                                                                            
        <HomepageHeading mobile />
        </Segment>
          {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
 <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const CardExampleExtraContent = () => (
    <Card>
      <Card.Content header='About Amy' />
      <Card.Content description={description} />
    </Card>
  )
  const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')
  
class HomepageLayout extends Component { 
    state = {
        visible: false,
        calculations: {
          topVisible: false,
          bottomVisible: false,
          onScreen: false,
          passing: false,
        }
        //...whatever construction you need
       }
    handleUpdate = (e, { calculations }) => this.setState({ calculations })
    render() {
        const { children } = this.props
        const { calculations } = this.state
        
    
        return (  <ResponsiveContainer>  
         
            <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Row>
    </Grid.Row>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
          </ResponsiveContainer> )
    }
        }



const leftItems = [
    { as: "a", content: "Home", key: "home" },
    { as: "a", content: "Users", key: "users" }
  ];
  const rightItems = [
    { as: "a", content: "Login", key: "login" },
    { as: "a", content: "Register", key: "register" }
  ];

export default HomepageLayout