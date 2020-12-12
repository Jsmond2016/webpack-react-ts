import React from "react";
import ReactDom from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
import "antd/dist/antd.css";
import { Layout } from "antd";
import NavBar from "./components/NavBar";
import User from "./components/User";
const { Content } = Layout;

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <NavBar />
        <Content style={{ padding: "20px" }}>
          <Switch>
            <Route path="/counter1" component={Counter1} />
            <Route path="/counter2" component={Counter2} />
            <Route path="/user" component={User} />
            <Redirect to="counter1" />
          </Switch>
        </Content>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
