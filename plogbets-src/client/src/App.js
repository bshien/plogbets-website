import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import Home from "./components/Home";
import About from "./components/About";
import MakeBet from "./components/MakeBet";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* <h1>App</h1> */}
          <Route path="/leader" component={Leaderboard}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/make" component={MakeBet}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
