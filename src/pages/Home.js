
import data from "../data/tracks";
import Music from "../component/Music/Music";
import '../App.css';
const Home = () => {

    return ( 
        <div className="App">  
            <ul className="content">
                {data.map(e =>
                <li >
                    <Music props={e}/>      
                </li> )} 
            </ul>                                          
        </div>
        
    )
}

export default Home;