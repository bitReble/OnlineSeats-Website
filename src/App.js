import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NavBar from "./components/layout/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route exact path="/" component={Login}></Route>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </Router>
  );
}

export default App;
