import React, { useState } from 'react';
import './CreatePostForm.css';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className='postForm'>
            <div style={{display:"flex", justifyContent:"left", margin:"0.5rem"}}>
                <label style={{marginRight:"0.5rem"}}>Name</label>
                <input style={{width:"75%"}} type='text'  value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div style={{display:"flex", justifyContent:"left", margin:"0.5rem"}} >
                <label style={{marginRight:"0.5rem"}}>Post</label>
                <textarea type='text' className='inputPost'  value={post} onChange={(event) => setPost(event.target.value)}/>               
            </div>
            <div style={{display:"flex", justifyContent:"left", margin:"0.5rem"}} >
            <label style={{marginRight:"0.5rem"}}>Date</label>
                <input type='date' className="form-control" value={date} onChange={(event) => setDate(event.target.value)}/>
                </div>
            <div style={{display:"flex", justifyContent:"right", marginRight:"0.5rem", marginBottom:"0.5rem"}}>                
                <button class="btn btn-primary" type='submit'  >Create</button>
            </div>               
        </form>
     );
}
 
export default CreatePost;