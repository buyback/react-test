import React from "react";
import Form from './form';
import List from './posting_list';
import {useSelector} from 'react-redux';

const Posting = () => {
  const isLogged = useSelector(state => state.isLogged);

  if(isLogged) {
    return ( 
      <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Postings</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new post</h2>
      <Form />
    </div>
  </div>
        );
    }
    else {
      return (
      <div className="App">
      <h1>Please login to add a post</h1>
    </div>
      )
    }
};

export default Posting;

