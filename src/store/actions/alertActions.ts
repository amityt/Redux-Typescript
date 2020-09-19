import { AlertAction, SET_ALERT } from "../models/weather";

export const setAlert = (message: string): AlertAction => {
	return {
		type: SET_ALERT,
		payload: message,
	};
};
