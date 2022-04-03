
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

// const [searchQuery, setsearchQuery] = useState("")
//     const [Result, setResult] = useState([])
//     //const [SelectedItems, setSelectedItems] = useState([])
//     const [SelectedQuery, setSelectedQuery] = useState([])

//     const handleSearch = (event) => {
//         event.preventDefault();
//         fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
//             method: 'GET', headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + props.token
//             }
//          })
//         .then((response) => response.json())
//         .then((lists) =>
//             setResult(lists.tracks.items)
//          ).catch((error) => console.log(error))
//     }

//     const addSelected = (tracks) => {
//         var hash = tracks.split(":")[2];
//         return fetch(`https://api.spotify.com/v1/tracks/${hash}`, {
//         method: 'GET', headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + props.token
//             }
//         }).then(res => res.json())
//         .then((lists) => setSelectedQuery([...SelectedQuery, lists]))
//         .catch((error) => console.log(error))   
//     }

//     const removeSelected = (tracks) => {
//         let hardCopy = [...SelectedQuery];
//         console.log()
//         hardCopy = hardCopy.filter((item) => item.uri !== tracks);
//         setSelectedQuery(hardCopy);
//     }

//     return (
//         <div>
//             <form onSubmit={(event) => handleSearch(event)}>
//                 <input
//                 value={searchQuery}
//                 placeholder="Search something"
//                 className="input-search"
//                 onChange={(event) => setsearchQuery(event.target.value)}
//                 ></input>
//                 <button className="btn-search">Search</button>
//             </form>

//             {/* createplaylist */}
//             <h1 className="heading1">Your playlist</h1>
//             <ul className="content">
//             {/* selected playlist will be added to playlist */}
//             {SelectedQuery.map(e =>
//             <li >
//                 <Track data={e} unselect={removeSelected} status={false}/>
//             </li> )} 
//             </ul>
//             {/* createplaylist */}

//             <h1 className="heading1">Current search</h1>
//             <ul className="content">
//             {Result.map(e =>
//             <li >
//                 <Track data={e} addselect={addSelected} unselect={removeSelected} status={true}/>
//             </li> )} 
//             </ul>

//         </div>
//     )