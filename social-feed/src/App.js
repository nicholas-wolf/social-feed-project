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
    
    <div className='divTopContainer'>
      <div className='divHeaderContainer'>
        <h3 style={{margin: '1rem'}}>
          Social
          <small  >Feed</small>
        </h3>
      </div>
        <div className='divBody'>                    
          <CreatePost addNewEntryProperty={addNewEntry} />           
          <DisplayPosts parentEntries={entries} />                    
        </div> 
    </div>
  );
}

export default App;
