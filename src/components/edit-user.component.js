import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserUserid = this.onChangeUserUserid.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      userid: '',
      password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Users/edit-User/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          userid: res.data.userid
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })

  }

  onChangeUserUserid(e) {
    this.setState({ userid: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const UserObject = {
      name: this.state.name,
      email: this.state.email,
      userid: this.state.userid,
      password: this.state.password
    };

    axios.put('http://localhost:4000/Users/update-User/' + this.props.match.params.id, UserObject)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/User-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>User Id</Form.Label>
          <Form.Control type="text" value={this.state.userid} onChange={this.onChangeUserUserid} />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update User
        </Button>
      </Form>
    </div>);
  }
}
