import { Typography } from "@material-ui/core";
import React from "react";
import { WeatherData } from "../store/types";
import LinearProgressBar from "./linearProgressBar";

interface WeatherProps {
	data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
	const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
	const celsius = (data.main.temp - 273.15).toFixed(2);
	return (
		<div>
			<Typography>
				{data.name} - {data.sys.country}
			</Typography>
			<div>
				<Typography>{data.weather[0].description}</Typography>
				<Typography>Temperature : {data.main.temp} K</Typography>
				<Typography>
					{" "}
					{fahrenheit}
					<sup>&#8457;</sup>
				</Typography>
				<Typography>
					{" "}
					{celsius}
					<sup>&#8451;</sup>
				</Typography>
				<div style={{ width: 100 }}>
					<LinearProgressBar value={(parseInt(celsius, 10) / 50) * 10} />
				</div>
			</div>
			<div>
				<Typography>{data.main.humidity}</Typography>
				<Typography>{data.main.pressure}</Typography>
				<Typography>{data.wind.speed} m/s</Typography>
			</div>
		</div>
	);
};

export default Weather;
