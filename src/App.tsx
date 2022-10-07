
import "./App.css";
import HomePage from "./pages/home";
import Recruitment from "./pages/recruitment";
import About from "./pages/about";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import ContactToUs from "./components/ContactToUs/contactToUs";

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <div>
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
            <Route path="/contact">
              <ContactToUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
