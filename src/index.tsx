import React from "react";
import ReactDom from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ul>
        <li>
          <Link to="counter1">counter1</Link>
        </li>
        <li>
          <Link to="counter2">counter2</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/counter1" component={Counter1} />
        <Route path="/counter2" component={Counter2} />
        <Redirect to="counter1" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
