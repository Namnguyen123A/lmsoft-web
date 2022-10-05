
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
import ContactToUs from "./components/ContactToUs/contactToUs";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center', fontSize : '50px', color: 'red'}}>
        is maintaining
      </div>
      <div>
       <Contact />
      </div>
      {/* <Router>
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
              <Link to="/contact"></Link>
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
            <Route path="/contact">
              <ContactToUs />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
