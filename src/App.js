import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NavBar from "./components/layout/Navbar";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";
import setAuthToken from "./util/setAuthToken";
import Alert from "./components/layout/Alert";
import BusRoute from "./components/pages/BusRoute";
import BusTypes from "./components/pages/BusTypes";
import { useEffect } from "react";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./components/routing/PrivateRoute";
import { Fragment } from "react";
import Search from "./components/pages/Search";
import Schedule from "./components/pages/Schedule";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar></NavBar>
          <Alert></Alert>
          <Route exact path="/" component={Login}></Route>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <PrivateRoute
              exact
              path="/bustype"
              component={BusTypes}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/busroute"
              component={BusRoute}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/schedule"
              component={Schedule}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/search"
              component={Search}
            ></PrivateRoute>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
