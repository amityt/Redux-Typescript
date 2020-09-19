import { SetErrorAction } from "./weather";

export const GET_DETAILS = "GET_DETAILS";
export const SET_COVID_LOADING = "SET_COVID_LOGIN";

export interface Corona {
	country: string;
	cases: number;
	todayCases: number;
	todayDeaths: number;
	deaths: number;
	recovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	totalTests: number;
	testsPerOneMillion: number;
}

export interface CoronaState {
	data: Corona | null;
	loading: boolean;
	error: string;
}

interface GetCoronaAction {
	type: typeof GET_DETAILS;
	payload: Corona;
}

interface SetCovidLoading {
	type: typeof SET_COVID_LOADING;
}

export type CoronaAction = GetCoronaAction | SetCovidLoading | SetErrorAction;
