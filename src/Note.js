import React from 'react';
import {Link} from 'react-router-dom';
import { format } from 'date-fns'

function Note(props){
  //takes in notes array
let notes = '';

  if (props.match === undefined){
    notes = props.notes.map(item => {
      return (
        <div className = "note" key = {item.id}>
          <h1><Link to={"/notes/" + item.id}>{item.name}</Link></h1>
          <p>Last Modified:  {format(item.modified, 'Do MMM YYYY')}</p>
          <button>Delete</button>
        </div>
      );
    });
    notes.push(
      <div className = "note" key = {333}>
          <h1><Link >New Note</Link></h1>
        </div>
    );
  } else if (props.match.params.folderId){
    notes = props.notes.map(item => {
      if (item.folderId === props.match.params.folderId){
        return (
          <div className = "note" key = {item.id}>
            <h1><Link to={"/notes/" + item.id}>{item.name}</Link></h1>
            <p>Last Modified:  {format(item.modified, 'Do MMM YYYY')}</p>
            <button>Delete</button>
          </div>
        );
      } else {
        return '';
      }
    });
    notes.push(
      <div className = "note" key = {333}>
          <h1><Link >New Note</Link></h1>
        </div>
    );
  } else { //if noteID
    notes = props.notes.map(item => {
      if (item.id === props.match.params.noteId){
        return (
          <div className = "note" key = {item.id}>
            <h1><Link to={"/notes/" + item.id}>{item.name}</Link></h1>
            <p>Last Modified:  {format(item.modified, 'Do MMM YYYY')}</p>
            <button>Delete</button>
            <p className = "body">{item.content}</p>
          </div>
        );
      } else {
        return '';
      }  
    });
  }
 


  return (
    <section className = "notes">
      {notes}
    </section>
  );

}

export default Note;