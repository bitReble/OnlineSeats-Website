import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NavBar from "./components/layout/Navbar";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";
import setAuthToken from "./util/setAuthToken";
import Alert from "./components/layout/Alert";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <Provider store={store}>
      <Router>
        <NavBar></NavBar>
        <Alert></Alert>
        <Route exact path="/" component={Login}></Route>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
