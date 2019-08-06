import React from 'react';

function Note(props){
  //takes in notes array

  const notes = props.notes.map(item => {
    return (
      <div className = "note">
        <p>{item.name}</p>
      </div>
    );
  });


  return (
    <section className = "notes">
      {notes}
    </section>
  );

}

export default Note;