import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Logout from "./screen/Logout";
import Watch from "./screen/Watch";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route path="/logout">
            <Layout>
              <Logout />
            </Layout>
          </Route>
          <Route path="/videos/:id">
            <Layout>
              <Watch />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default App;
