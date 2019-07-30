import React from "react";
import {connect, useDispatch} from "react-redux";
import {handlePostingStatus} from '../actions';
import {InputGroup, FormControl} from "react-bootstrap";

const mapStateToProps = state => {
  return { postings: state.postings.postings };
};


function ConnectedList({ postings }) {
  const dispatch = useDispatch();

  var localItems = JSON.parse(localStorage.getItem('posts'))

  //if local storage is not empty
  if(localItems){
  return (
  <ul className="list-group list-group-flush">
    <h5>Showing from local storage</h5>
    {localItems.map(el => (
      <li className="list-group-item" key={el._id}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          {el.posting_status === 1 ? <InputGroup.Checkbox checked onChange={() => dispatch(handlePostingStatus(el))}/> : <InputGroup.Checkbox onChange={() => dispatch(handlePostingStatus(el))}/>} 
            
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with checkbox" disabled value={el.title} />
        </InputGroup>
      </li>
    ))}
  </ul>
  );
    }
  else { //show from redux state

    return (
    <ul className="list-group list-group-flush">
    {postings.map(el => (
      <li className="list-group-item" key={el._id}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          {el.posting_status === 1 ? <InputGroup.Checkbox checked onChange={() => dispatch(handlePostingStatus(el))}/> : <InputGroup.Checkbox onChange={() => dispatch(handlePostingStatus(el))}/>} 
            
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with checkbox" disabled value={el.title} />
        </InputGroup>
      </li>
    ))}
  </ul>
    )
  }

};


const List = connect(mapStateToProps)(ConnectedList);

export default List;
// {el.posting_status ? <h4>{el.title}</h4> : ''} 
//{el.posting_status ? <h6>{el.content}</h6> : ''}  
