import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import NavigationBar from  '../Navigationbar' 
import NavBar from '../Navbar'
import MenuNew from "../Menu"
import {  } from 'semantic-ui-react'
import './index.css';


import {
  Rating,
    Label,
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

class HomeHeading2 extends React.Component {
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
      <Transition visible={calculations.onScreen}  animation='zoom' duration={500}>
      <Container> <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card> </Container>
      {/* <Image fluid src='https://www.eenvoud.nl/wp-content/uploads/2017/05/website_bg.png' /> */}

      </Transition>
 </Visibility>
       )
    }
}

 


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
      <Transition visible={calculations.onScreen}  animation='bounce' duration={700}>
        <Image style={{paddingBottom:'10px'}} fluid src='https://www.schoeller-textiles.com/pics/history/history-header-2.jpg' />
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
         
         <Container
         id="bg"
        style={{padding: '0em'}}
      >
            {/* <HomepageHeading /> */}
            {/* <HomeHeading2 /> */}
           
        </Container>
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
            
        <Segment>                                                                            
        <HomepageHeading mobile />
        <HomeHeading2 />
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
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
      <Rating icon='star' defaultRating={3} maxRating={4} />
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
           
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