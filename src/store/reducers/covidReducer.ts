import {
	CoronaAction,
	CoronaState,
	GET_DETAILS,
	SET_COVID_LOADING,
} from "../models/corona";
import { SET_ERROR } from "../models/weather";

const initialState: CoronaState = {
	data: null,
	loading: false,
	error: "",
};

export default (state = initialState, action: CoronaAction): CoronaState => {
	switch (action.type) {
		case GET_DETAILS:
			return {
				data: action.payload,
				loading: false,
				error: "",
			};
		case SET_COVID_LOADING:
			return {
				...state,
				loading: true,
			};
		case SET_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
