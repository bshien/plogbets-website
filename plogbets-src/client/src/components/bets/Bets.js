import React from "react";
import { useSelector } from "react-redux";

import Bet from "./bet/Bet";

const Bets = () => {
  const bets = useSelector((state) => state.bets);
  {
    /*const classes = useStyles();*/
  }

  console.log(bets);
  return (
    <>
      <h1>BETS</h1>
      <Bet />
      <Bet />
    </>
  );
};

export default Bets;
