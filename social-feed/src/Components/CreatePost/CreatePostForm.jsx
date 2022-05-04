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
            <div className='divContainer'>
                <label className='labelContainer'>Name</label>
                <input style={{width:"75%"}} type='text'  value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className='divContainer'>
                <label className='labelContainer'>Post</label>
                <textarea type='text' className='inputPost'  value={post} onChange={(event) => setPost(event.target.value)}/>               
            </div>
            <div className='divContainer' >
            <label className='labelContainer'>Date</label>
                <input type='date' className="form-control" value={date} onChange={(event) => setDate(event.target.value)}/>
                </div>
            <div className='buttonDivContainer'>                
                <button class="btn btn-primary" type='submit'  >Create</button>
            </div>               
        </form>
     );
}
 
export default CreatePost;