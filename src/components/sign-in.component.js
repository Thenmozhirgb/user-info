import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class SignIn extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        //name,email,password
        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          username: '',
          password: ''
        }
      }
    
      onChangeUserUsername(e) {
        this.setState({ username: e.target.value })
      }

      onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
  
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const UserObject = {
          username: this.state.username,
          password: this.state.password
        };
    
        axios.post('http://localhost:4000/s/create-user', userObject)
          .then(res => {
            console.log(res.data);
            this.props.createUser(res.data);
          });
        this.setState({ username: '', password:'' });
      }
    
    render() {
        return (<div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={this.state.username} onChange={this.onChangeUserUsername} />
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