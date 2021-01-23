import * as api from "../api";

// Action Creators
export const getBets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBets();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBet = (bet) => async (dispatch) => {
  try {
    const { data } = await api.createBet(bet);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
