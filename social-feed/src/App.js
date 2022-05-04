import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePostForm';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './App.css';

function App() {

  const [entries, setEntries] = useState([])

  function addNewEntry(entry){
    
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    
    <div style={{backgroundColor:"aqua", left:"0", right:"0", bottom:"0", top:"7%", position:"absolute", borderTop:"0.1rem solid black"}}>
      <div style={{backgroundColor:"white", position:"fixed", top:"0", width:"100%", bottom:"93%"}}>
        <h3 style={{margin: '1rem'}}>
          Social
          <small  >Feed</small>
        </h3>
      </div>
        <div  style={{width:"50%",  margin:'auto', marginTop:"0.5rem"}}>                    
          <CreatePost addNewEntryProperty={addNewEntry} />           
          <DisplayPosts parentEntries={entries} />                    
        </div> 
    </div>
  );
}

export default App;
