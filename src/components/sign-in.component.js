import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from "react-redux";
import { signInSuccess } from "../redux/actions/userAction";

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        //name,email,password
        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          userid: '',
          password: ''
        }
      }
    
      onChangeUserUsername(e) {
        this.setState({ userid: e.target.value })
      }

      onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
  
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const userObject = {
          userid: this.state.userid,
          password: this.state.password
        };
    
        axios.get('http://localhost:4000/Users', userObject)
          .then(res => {
            console.log(res.data);
            if(res.data) {
              var registeredUser = res.data.some( user => { 
                return userObject.userid === user.userid && userObject.password === user.password;
              }); 
              if(registeredUser) {
                this.props.signInSuccess();
              }
            }
          });
          this.setState({ userid: '', password:'' });
      }
    
    render() {
        return (<div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>User Id</Form.Label>
              <Form.Control type="text" value={this.state.userid} onChange={this.onChangeUserUsername} />
            </Form.Group>
    
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />
            </Form.Group>

            <Button variant="danger" size="lg" block="block" type="submit">
          Sign-in
        </Button>
     </Form>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  ...state.userReducer
})

const mapDispatchToProps = (dispatch) => ({
  signInSuccess: () => dispatch(signInSuccess())
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
