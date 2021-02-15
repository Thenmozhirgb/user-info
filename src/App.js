import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; 
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import userList from "./components/user-list.component";
import signIn from "./components/sign-in.component";
import { signOutSuccess } from "./redux/actions/userAction";

class App extends Component {
  
  constructor(props) {
    super(props)
    this.onSignOut = this.onSignOut.bind(this);
  }
  
  onSignOut() {
    this.props.signOutSuccess();
  }

  render() {
    return (<Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

              <Navbar.Brand>
                <Link to={"/sign-in"} className="nav-link">
                  User Information App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                {
                  !this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/sign-in"} className="nav-link">
                      Sign In
                    </Link>
                  </Nav>
                }
                {
                  !this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/create-user"} className="nav-link">
                      Sign Up
                    </Link>
                  </Nav>
                }

                {/* <Nav>
                  <Link to={"/edit-user/:id"} className="nav-link">
                    Edit User
                  </Link>
                </Nav> */}
                {
                  this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/user-list"} className="nav-link">
                      User List
                    </Link>
                  </Nav>
                }
                {
                  this.props.isSignedIn &&
                  <Nav>
                    <Link to={"/sign-out"} className="nav-link" onClick={this.onSignOut}>
                      Sign Out
                    </Link>
                  </Nav>
                }
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={signIn} />
                  <Route path="/create-user" component={CreateUser} />
                  <Route path="/edit-user/:id" component={EditUser} />
                  <Route path="/user-list" component={userList} />
                  <Route path="/sign-in" component={signIn} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>);
  }
}

const mapStateToProps = state =>{
  return {isSignedIn : state.userReducer.isSignedIn}
};

const mapDispatchToProps = (dispatch) => ({
  signOutSuccess: () => dispatch(signOutSuccess())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
