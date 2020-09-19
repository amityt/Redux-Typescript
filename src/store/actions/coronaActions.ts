import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { CoronaAction, GET_DETAILS, SET_COVID_LOADING } from "../models/corona";
import { SET_ERROR } from "../models/weather";

export const getCoronaDetails = (
	country: string
): ThunkAction<void, RootState, null, CoronaAction> => {
	return async (dispatch) => {
		try {
			const res = await fetch(
				`https://coronavirus-19-api.herokuapp.com/countries/${country}`
			);
			if (!res.ok) {
				const resData = await res.json();
				throw new Error(resData.message);
			}
			const resData = await res.json();
			dispatch({
				type: GET_DETAILS,
				payload: resData,
			});
		} catch (err) {
			dispatch({
				type: SET_ERROR,
				payload: err.message,
			});
		}
	};
};

export const setCovidLoading = (): CoronaAction => {
	return {
		type: SET_COVID_LOADING,
	};
};
export const setError = (): CoronaAction => {
	return {
		type: SET_ERROR,
		payload: "",
	};
};
