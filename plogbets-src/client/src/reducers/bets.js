export default (bets = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...bets, action.payload];
    default:
      return bets;
  }
};
