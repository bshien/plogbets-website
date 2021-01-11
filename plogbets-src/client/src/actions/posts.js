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
