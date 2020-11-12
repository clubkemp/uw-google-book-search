import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Hero from "./components/Hero"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={"/saved"}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
