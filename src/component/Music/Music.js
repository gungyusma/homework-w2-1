import Button from "../Button/Button";
import './Music.css';
const Music = ({props}) => {
    return ( 
        <div className="Tracks">  
                <img src={props.album.images[1].url} alt="cover"/>
                <h3>{props.name}</h3>
                {/* <p>{props.album.name}</p> */}
                <p>{props.album.artists[0].name}</p>
                <Button />             
        </div>       
    )
}

export default Music;