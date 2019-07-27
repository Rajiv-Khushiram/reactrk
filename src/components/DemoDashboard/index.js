import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table
} from "semantic-ui-react";
 import './index.css'

class Dashboard extends Component {
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
              <Menu.Item active as="a">
                Overview
              </Menu.Item>
              <Menu.Item as="a">Reports</Menu.Item>
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
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row textAlign="center">
                
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                  <Link to="/assignments">
                  <Label basic size="large">
                    Label
                  </Label>
                  </Link>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                  <Link to="/assignments">
                  <Label basic size="large">
                    Label
                  </Label>
                  </Link>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                  <Link to="/assignments">
                  <Label basic size="large">
                    Label
                  </Label>
                  </Link>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://rawcdn.githack.com/semantic-ui-forest/forest-templates/b8a63e3c5f573143431a7fa42404f0bc83c419b2/bootstrap/dashboard/react/public/static/images/wireframe/square-image.png"
                  />
                  <Link to="/assignments">
                  <Label basic size="large">
                    Label
                  </Label>
                  </Link>
                  <p>Something else</p>
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
