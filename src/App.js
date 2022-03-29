// import Home from "./pages/Home";
import { Component } from "react";
import Search from "./pages/Search";
// import Search from "./pages/Search";
// import Search from "./pages/Search";

class App extends Component {

  state = {
    access_token: "",
    token_type: "",
    expires_in: "",
    state: "",
    error: ""
  }

  handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=e2d2b2820b4140c2b5e5628c3756709c&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`
  } 

  componentDidMount() {
    this.setState({access_token: window.location.hash.split("&")[0].split("=")[1]})
  }

  render() {
    return (
      <div className="App">
        {this.state.access_token !== undefined ? <Search token={this.state.access_token}/> : <button onClick={this.handleToken}>Login</button>}
      </div>
    );
  }
 
}

export default App;
