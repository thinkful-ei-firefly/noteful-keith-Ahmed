import React from 'react';
import './App.css';
import Folder from './Folder';
import Store from './Store';
import Note from './Note';
import Header from './Header';

class App extends React.Component{
  state = {
    selectedFolder: ''
  };
  

  render(){
    return (
    <div className = "App">
      <Header />
      <main>
        <Folder folders = {Store.folders}/>
        <Note notes = {Store.notes}/>
      </main>
    </div>
    );
  }

}

export default App;
