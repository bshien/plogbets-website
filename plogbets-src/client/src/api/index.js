import axios from "axios";

const url = "http://localhost:5000/bets";

export const fetchBets = () => axios.get(url);
export const createBet = (newBet) => axios.post(url, newBet);
