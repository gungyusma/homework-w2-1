
// import { useState } from 'react';
// import './Music.css';
// const Music = ({data, addselect, unselect, status}) => {
//     const [buttontext, setButtonText] = useState(status ? "Select" : "Unselect")
//     const [Selected, setSelected] = useState(status)
//     const handleSelect = () => {
//         if (Selected) {
//             setSelected(false)
//             setButtonText("Unselect")
//             addselect(data.uri)
//         } else {
//             setSelected(true)
//             setButtonText("Select")
//            unselect(data.uri)  
//         }

//     }
//     return ( 
//         <div className="Tracks">  
//                 <img src={data.album.images[1].url} alt="cover"/>
//                 <h3>{data.name}</h3>
//                 {/* <p>{data.album.name}</p> */}
//                 <p>{data.album.artists[0].name}</p>
//                 <button className="btn-select" onClick={handleSelect}>{buttontext}</button>        
//         </div>       
//     )
// }

// export default Music;