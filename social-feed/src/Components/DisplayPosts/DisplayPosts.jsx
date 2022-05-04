import LikeButton from '../LikeButton/LikeButton';
import UnlikeButton from '../UnlikeButton/UnlikeButton';
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (
        <table className="table" style={{ width:"100%", margin:"auto"}}>
            <tbody>
            {props.parentEntries.map((entry, index)=> {
                return (                 
                    <tr key={index}>
                        <td className='postContainer'>                       
                        <div >{entry.name}</div>
                        <div >{entry.post}</div>
                        <div>{entry.date}</div>
                        <div style={{display:"flex", justifyContent:"right" , marginRight:"0.5rem", marginBottom:"0.5rem"}}>
                            <LikeButton/>
                            <UnlikeButton/>
                        </div>                       
                        </td>              
                    </tr>              
                );
            })} 
            </tbody>
        </table>
      );
}
                 

 
export default DisplayPosts;