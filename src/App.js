import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Routes from "./Routes";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    console.log('auth method fired', authenticated)
    this.setState({ isAuthenticated: authenticated });
    console.log('state', this.state)
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>PostIt</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
          {this.state.isAuthenticated
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : <Fragment>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </Fragment>
          }
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
