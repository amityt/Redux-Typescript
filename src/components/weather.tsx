import { Button, InputBase, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";
import LinearProgressBar from "./linearProgressBar";

const Weather: React.FC = () => {
	const dispatch = useDispatch();

	const loading = useSelector((state: RootState) => state.weather.loading);
	const [city, setCity] = useState("");
	const changeHandler = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setCity(event.target.value);
	};
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (city.trim() === "") {
			return dispatch(setAlert("City cannot be blank"));
		}
		dispatch(setLoading());
		dispatch(getWeather(city));
		setCity("");
	};
	const data = useSelector((state: RootState) => state.weather.data);
	return (
		<div>
			<div>
				<form onSubmit={submitHandler}>
					<InputBase placeholder="Enter city name" onChange={changeHandler} />
					<Button type="submit">Search</Button>
				</form>
			</div>
			{loading ? (
				<p>Loading...</p>
			) : (
				data && (
					<>
						<Typography>
							{data.name} - {data.sys.country}
						</Typography>
						<div>
							<Typography>{data.weather[0].description}</Typography>
							<Typography>Temperature : {data.main.temp} K</Typography>
							<Typography>
								{" "}
								{(data.main.temp * 1.8 - 459.67).toFixed(2)}
								<sup>&#8457;</sup>
							</Typography>
							<Typography>
								{" "}
								{(data.main.temp - 273.15).toFixed(2)}
								<sup>&#8451;</sup>
							</Typography>
							<div style={{ width: 100 }}>
								<LinearProgressBar
									value={
										(parseInt((data.main.temp - 273.15).toFixed(2), 10) / 50) *
										10
									}
								/>
							</div>
						</div>
						<div>
							<Typography>{data.main.humidity}</Typography>
							<Typography>{data.main.pressure}</Typography>
							<Typography>{data.wind.speed} m/s</Typography>
						</div>
					</>
				)
			)}
		</div>
	);
};

export default Weather;
