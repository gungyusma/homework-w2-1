//import CreatePlaylist from "./pages/CreatePlaylist";
import Routes from "./routes";
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
          <Routes />
      </Router>    
    </>
  );
}
