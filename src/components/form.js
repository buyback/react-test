import React, { Component } from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import { Button, Form, Alert } from 'react-bootstrap';
import { addPosting } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    addPosting: posting => dispatch(addPosting(posting))
  };
}

class Form_Posting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content: "",
      posting_status: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = e => {
    this.setState({ 
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = e => {

    //to store in local storage
    var localItems = JSON.parse(localStorage.getItem('posts')) || [];
   

    e.preventDefault();
    const { title, content, posting_status } = this.state;
    const _id = uuidv1();
    

    //set unique id to state
    this.state.id = _id;


    localItems.push(this.state);
    var result = this.props.addPosting({ _id, title, content, posting_status });  //reducer add posting
    
    var object = document.getElementById("post-alert");
    if (result.type === 'FOUND_BAD_WORD') {
      object.classList.remove("d-none");
      
    }
    else {
      object.classList.add("d-none");
      localStorage.setItem("posts", JSON.stringify(localItems));      //store to local storage
    }

    this.setState({ id: "", title: "", content: "", posting_status: 0 });

  };

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    
  }

  
  render() {
    const { title, content } = this.state;
    return (
        
        <div className="container">
          <div className="d-none" id ="post-alert">
            <Alert variant="danger">
              Title contains bad words !
            </Alert>
          </div>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={this.handleChange} value={title} />
        </Form.Group>
        <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={this.handleChange} value={content} />
        </Form.Group>
        <Button variant="primary" type="submit">
            SAVE
        </Button>
        </Form>
        </div>
    );
  }
}

const FormPosting = connect(null, mapDispatchToProps) (Form_Posting);

export default FormPosting;
