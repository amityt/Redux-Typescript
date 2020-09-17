import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store";
import Search from "./components/search";
import Alert from "./components/alert";
import Weather from "./components/weather";
import { Typography } from "@material-ui/core";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";

const App: React.FC = () => {
	const dispatch = useDispatch();
	const weather = useSelector((state: RootState) => state.weather.data);
	const loading = useSelector((state: RootState) => state.weather.loading);
	const error = useSelector((state: RootState) => state.weather.error);
	const alertMsg = useSelector((state: RootState) => state.alert.message);

	return (
		<div>
			<div
				style={{
					maxWidth: 500,
					height: "100%",
					margin: "0 auto",
				}}>
				<Search title="Enter city name and press search button" />
				{loading ? (
					<Typography>Loading...</Typography>
				) : (
					weather && <Weather data={weather} />
				)}
				{alertMsg && (
					<Alert
						message={alertMsg}
						onClose={() => {
							dispatch(setAlert(""));
						}}
					/>
				)}
				{error && (
					<Alert message={error} onClose={() => dispatch(setError())} />
				)}
			</div>
		</div>
	);
};

export default App;
