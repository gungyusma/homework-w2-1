import Button from "../component/Button/Button";
import data from "../data/data";
import Music from "../component/Music/Music";
import '../App.css';
const Home = () => {

    return ( 
        <div className="App">  
            <Music image={data.album.images[1].url} name={data.name} album={data.album.artists[0].name}/>
            <Button /> 
        </div>
        
    )
}

export default Home;