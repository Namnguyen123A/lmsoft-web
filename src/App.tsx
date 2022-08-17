
import "./App.css";
import HomePage from "./pages/home";
import Recruitment from "./pages/recruitment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/home"></Link>
            </li>
            <li>
              <Link to="/recruitment"></Link>
            </li>

          </ul>
        </nav>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/recruitment">
              <Recruitment />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
