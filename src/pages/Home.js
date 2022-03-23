import Button from "../component/Button";
import data from "../data/data";
import '../component/App.css';
const Home = () => {

    return ( 
        <div className="App">  
            <img src={data.album.images[1].url} alt="cover"/>
            <h1>{data.name}</h1>
            <h2>{data.album.artists[0].name}</h2>
            <Button /> 
        </div>
        
    )
}

export default Home;