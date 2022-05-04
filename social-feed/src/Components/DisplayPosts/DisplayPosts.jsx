import LikeButton from '../LikeButton/LikeButton';
import UnlikeButton from '../UnlikeButton/UnlikeButton';
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (
        <table className='tableContainer'>
            <tbody>
            {props.parentEntries.map((entry, index)=> {
                return (                 
                    <tr key={index}>
                        <td className='postContainer'>                       
                            <div className='.nameContainer'>{entry.name}</div>
                            <div >{entry.post}</div>
                            <div>{entry.date}</div>
                            <div className='buttonContainer'>
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