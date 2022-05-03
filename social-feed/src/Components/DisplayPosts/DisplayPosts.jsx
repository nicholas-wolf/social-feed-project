import LikeButton from '../LikeButton/LikeButton';
import UnlikeButton from '../UnlikeButton/UnlikeButton';
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (
        <table className="table">
            <thead>
            <tr>                             
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index)=> {
                return (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                    <div><LikeButton/></div>
                    <div><UnlikeButton/></div>                
                </tr>
                );
            })} 
            </tbody>
        </table>
      );
}
                 

 
export default DisplayPosts;