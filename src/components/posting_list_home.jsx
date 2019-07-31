import React from "react";
import {connect} from "react-redux";


const mapStateToProps = state => {
  return { postings: state.postings.postings };
};


const ConnectedList = ({ postings }) => {
  return (
  <ul className="list-group list-group-flush">
    {postings.map(el => (
      <li className="list-group-item" key={el._id}>
            {el.posting_status === 1 ? <h4>{el.title}</h4> : ''} 
            {el.posting_status === 1 ? <h6>{el.content}</h6> : ''}  
      </li>
    ))}
  </ul>
  );
};


const List = connect(mapStateToProps)(ConnectedList);

export default List;
// {el.posting_status ? <h4>{el.title}</h4> : ''} 
//{el.posting_status ? <h6>{el.content}</h6> : ''}  
