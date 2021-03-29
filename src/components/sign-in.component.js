import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from "react-redux";
import { signInVerification } from "../redux/actions/userAction";

export class SignIn extends Component {
  constructor(props) {  {/*constructor is a one of the react lifecycle method.
  The constructor method used to initialize an object's state in a class. Binding event handler methods to an instance. why this line is used for here? binding the event handler methods */}
    super(props) //super is used to call the constructor of the parent class and to access the parent's properties and methods. we need to access the props inside the constructor, we need to call super(props). it is mandatory for using constructor 

    // Setting up functions;
    //name,email,password
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);//this keyword represents the object that called the method, The bind() method creates a new function, when invoked, has the this sets to a provided value.
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);//when you need to 'bind' context to a function
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = { // to assign a initial state value for userid and password
      userid: '',
      password: ''
    }
  }

  onChangeUserUsername(e) { // to create onChange event method for userid field.
    this.setState({ userid: e.target.value }) //setState method is used for when state value(userid) is changed in the screen this line sholud be called and change the state value. 
  }

  onChangeUserPassword(e) {//to create onChange event method for password field.
    this.setState({ password: e.target.value }) //setState method is used for when state value(password) is changed in the screen this line sholud be called and change the state value. 
  }

  onSubmit(e) { // to create onSubmit event method for sign-in button. e represented by event.
    e.preventDefault()//The prevent default method is called, the default action of the event will not be triggered
    const userObject = { // to create a object with property and values.
      userid: this.state.userid, //userid is a property and the value is this.state.userid and the userid value is called from line no 21
      password: this.state.password//password is a property and the value is this.state.password and password value is called from line no22
    };
    this.props.signInVerify(userObject);// to pass the userobject value to signInverify variable in the line no 74, and the userobject value from the line no 36. 
  }

  render() {//each compoent must have render method.
    if (this.props.isSignedIn) {//if the condition of issignedin is true to displayed userlist screen and then userlist screen not displayed. isSignedIn varialbe from the line no 70.
      // Redirect to User List 
      this.props.history.push('/user-list') //this line used for when the condition is true userlist screen displayed without refreshing. 
    }
    return (
    <div className="form-wrapper"> 
      <Form onSubmit={this.onSubmit}> {/* onsubmit method is called from the line no 34.this line used a bootstrap styling form.*/}
        <Form.Group controlId="Name">{/*form.group used for component form control, proper spacing, supported the label, and validation state. */}
          <Form.Label>User Id</Form.Label>{/*form.label used for text */}
          <Form.Control type="text" value={this.state.userid} onChange={this.onChangeUserUsername} /> {/*the user enter the userid in the form.control field in the screen, onchange event is used in this line. and then the 26th line should be triggerd, value shoule be stored in 27th line and 37th line*/}  
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />{/*the user enter the password in the form.control field in the screen, onchange event is used in this line and then the 30th line should be triggerd, value shoule be stored in 31th line and 38th line*/}
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">{/*variant is represents a color, size is represents a text size large, block is represents a adjust the width of your block buttons.*/}
          Sign-in
        </Button>
      </Form>
    </div>);
  }
}
//This is redux part. 
const mapStateToProps = (state) => {//It is called every time the store state changes. this function have two parameter state and ownprops
  return {isSignedIn : state.userReducer.isSignedIn}; // this line called from the userreducer file with isSignedIn variable value to asiign in the left side issignedIn 
}

const mapDispatchToProps = (dispatch) => ({//mapDispatchToProps is used for dispatching actions to the store.this function have two parameter dispatch and ownprops
  signInVerify: (userObject) => dispatch(signInVerification(userObject)),//to dispatching userobject to the signInVerification action in useraction file with 25th line.
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);//The connect() function connects a React component to a Redux store.
