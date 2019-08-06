import React from 'react';
import {Link} from 'react-router-dom';

function Folder(props){
  //takes in id and name
let folds = '';
  if (props.match === undefined){
    folds = props.folders.map(item => {
      return (
        <div  className = "folder" key = {item.id}>
          <p><Link to = {"/folders/" + item.id}>Folder {item.name}</Link></p>
        </div>
      );
    });
    folds.push(
      <div  className = "folder" key = {2346}>
        <p><Link>New Folder</Link></p>
      </div>);
  } else if (props.match.params.folderId){
    folds = props.folders.map(item => {
      if (item.id === props.match.params.folderId){
        return (
          <div  className = "folder selected" key = {item.id}>
            <p><Link to = {"/folders/" + item.id}>Folder {item.name}</Link></p>
          </div>
        );
      } else {
        return (
          <div  className = "folder" key = {item.id}>
            <p><Link to = {"/folders/" + item.id}>Folder {item.name}</Link></p>
          </div>
        );
      }
    });
    folds.push(
      <div  className = "folder" key = {1235}>
        <p><Link>New Folder</Link></p>
      </div>);
  } else { //if noteID
    folds = (
        <div  className = "folder" key = {123345}>
          <p><Link to = {"/" }>Go Back</Link></p>
        </div>
    );
  }

  return (
    <section className = 'folders'>
      {folds}
    </section>
  );

}

export default Folder;