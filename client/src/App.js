import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Hero from "./components/Hero"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
