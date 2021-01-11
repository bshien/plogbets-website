import React from "react";
import MakeBet from "../bets/MakeBet";
import Bets from "../bets/Bets";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <MakeBet />
        <Bets />
      </div>
    );
  }
}

export default Home;
