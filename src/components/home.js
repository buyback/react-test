import React, { Component } from 'react';
import List from './posting_list_home';

class Home extends Component {

    render() { 
        return ( 
            <div className="App">
            <h1>Home Page</h1>
            <h2>Postings</h2>
            <List /> 
            </div>
            );
    }
}
 
export default Home;
