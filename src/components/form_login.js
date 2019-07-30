import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import {connect} from 'react-redux';
import {login, username_login} from '../actions';

function mapDispatchToProps (dispatch) {
    return {
        username_login: data => dispatch(username_login(data)),
        login: data => dispatch(login(data))
    }
}

class Form_Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
      }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        this.props.username_login({username, password});
        this.props.login();
        this.setState({ username: "", password: ""});
    }

    render() { 
        const { username, password } = this.state;

        return (  
        <div className="container">
        <Form onSubmit = {this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={this.handleUsernameChange} value={username} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} value={password} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>  );
    }
}

const FormLoginConnect = connect(null, mapDispatchToProps)(Form_Login);
 
export default FormLoginConnect;
