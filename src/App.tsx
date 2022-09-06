
import "./App.css";
import HomePage from "./pages/home";
import Recruitment from "./pages/recruitment";
import About from "./pages/about";
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
      <Route exact path="/">
        <HomePage />
      </Route>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home"></Link>
            </li>
            <li>
              <Link to="/recruitment"></Link>
            </li>
            <Link to="/about"></Link>
          </ul>
        </nav>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/recruitment">
              <Recruitment />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
