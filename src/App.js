import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";

export default function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Login />
        </div>
    </Provider>
  );
}
