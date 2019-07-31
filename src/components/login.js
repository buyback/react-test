import React from "react";
import Form from './form_login'
import {useSelector} from 'react-redux';

const Login = () => {
  const isLogged = useSelector(state => state.isLogged);    //state.reducerName
  const username = useSelector(state => state.userData.username);

  if(!isLogged) {
  return ( 
  <div className="App">
    <h1>Login Page</h1>
    <Form />
  </div>
  );
  }
  else {
    return (
      <div className="App">
      <h1>Welcome {username}</h1>
    </div>
    );
  }
};

export default Login;
