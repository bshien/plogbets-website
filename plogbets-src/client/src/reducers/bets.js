export default (bets = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return bets;
    case "CREATE":
      return bets;
    default:
      return bets;
  }
};
