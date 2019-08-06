import React from 'react';

function Folder(props){
  //takes in id and name
  console.log(props);

  const folds = props.folders.map(item => {
    return (
      <div  className = "folder">
        <p>Folder {item.name}</p>
      </div>
    );
  });

  return (
    <section className = 'folders'>
      {folds}
    </section>
  );

}

export default Folder;