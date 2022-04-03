import Search from "../component/CreatePlaylist/Search"
//import Form from "../component/CreatePlaylist/Form"

function CreatePlaylist(props) {
    return  (
        <div>
        <Search token={props.token}/>

        </div>
    )
}

export default CreatePlaylist;