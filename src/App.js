import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import NavBar from "./components/layout/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route exact path="/" component={Login}></Route>
      <Switch>
        <Route exact path="/signin" component={Login}></Route>
        <Route exact path="/signup" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
