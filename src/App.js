import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar'
import "bootstrap/dist/css/bootstrap.css";
import Login from './components/login';
import Home from './components/home';
import About from './components/about';
import Posting from './components/posting';


function App() {

  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/posting" component={Posting} exact />
          </Switch>
      </Router>
 
    </React.Fragment>
  );
}

export default App;

//      <h1>Counter {counter}</h1>
//<button onClick={() => dispatch(increment(5))}>+</button>
//<button onClick={() => dispatch(decrement())}>-</button>