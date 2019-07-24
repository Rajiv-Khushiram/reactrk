import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import { Header, Icon, Image, Menu, Sidebar, Segment } from "semantic-ui-react";


class MenuNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {}

  toggleVisibility(e) {}

  render() {
    return (
      <div>
        <Menu secondary attached="top">
          <Menu.Item
            onClick={() =>
              this.setState({ menuVisible: !this.state.menuVisible })
            }
          >
            <Icon name="sidebar" />Menu
          </Menu.Item>
          <Menu.Item>
            <Image size="small" src="" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="Welocme User" onClick={this.handleItemClick} />
            <Menu.Item name="Logout" href="https://www.google.com" />
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable as={Segment} attached="bottom">
          <Sidebar
            as={Menu}
            animation="overlay"
            visible={this.state.menuVisible}
            icon="labeled"
            vertical
            inline="true"
            inverted
          >
            <Menu.Item>
              <Icon name="home" />Districts
            </Menu.Item>
            <Menu.Item>
              <Icon name="block layout" />Manage Partner
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
      
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default MenuNew;
