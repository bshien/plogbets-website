import React, { useEffect } from "react";
import NavBar from "./components/ui-tools/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getBets } from "./actions/posts";
import Leaderboard from "./components/pages/Leaderboard";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import MakeBet from "./components/bets/MakeBet";

const App = () => {
  {
    /*const classes = useStyles();*/
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBets());
  }, [dispatch]);

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
