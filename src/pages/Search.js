import { Component } from "react/cjs/react.production.min";
import Music from "../component/Music/Music";
import '../App.css';

class Search extends Component {
    state = {
        searchQuery: "",
        Result: []
    }

    handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://api.spotify.com/v1/search?q=${this.state.searchQuery}&type=track`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token
            }
         })
        .then((response) => response.json())
        .then((lists) =>
        this.setState({Result: lists.tracks.items})
         ).catch((error) => console.log(error))
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSearch(event)}>
                    <input
                    value={this.state.searchQuery}
                    placeholder="Search something"
                    className="input-search"
                    onChange={(event) => this.setState({searchQuery: event.target.value})}
                    ></input>
                    <button className="btn-search">Search</button>
                </form>
                <h1 className="heading1">Current search</h1>
                <ul className="content">
                {this.state.Result.map(e =>
                <li >
                    <Music props={e}/>
                </li> )} 
                </ul>
            </div>
        )
    }
}

export default Search;