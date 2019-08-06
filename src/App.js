import React from 'react';
import './App.css';
import Folder from './Folder';
import Store from './Store';
import Note from './Note';
import Header from './Header';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';


class App extends React.Component{
  state = {
  };

  findFolder (folderId)  {
    return Store.folders.find(folder => folder.id === folderId);
  }

  findNote (noteId) {
    return Store.notes.find(notes => noteId.id === noteId)
  }

  render(){
    return (
    <div className = "App">
      <Header />
      <main>
        
        <Switch>
          <Route exact path = "/folders/:folderId" render = {props => <Folder {...props} folders = {Store.folders}/>}/>
          <Route exact path = "/notes/:noteId" render = {props => <Folder {...props} folders = {Store.folders} note= {findNote(props.match.params.noteId)} folderName = {findFolder(note.folderId)}  />}/>
          <Route  render = {() => <Folder folders = {Store.folders}/>}/>
        </Switch>

        <Switch>
          <Route exact path = "/folders/:folderId" render = {props => <Note {...props} notes = {Store.notes}/>}/>
          <Route exact path = "/notes/:noteId" render = {props => <Note {...props} notes = {Store.notes}/>}/>
          <Route render = {() => <Note notes = {Store.notes}/>}/>
        </Switch>
          
      </main>
    </div>
    );
  }

}

export default App;
