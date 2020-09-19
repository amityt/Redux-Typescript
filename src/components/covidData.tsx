import { Typography } from "@material-ui/core";
import React from "react";
import { Corona } from "../store/models/corona";

interface CovidDataProps {
	covidData: Corona;
}

const CovidData: React.FC<CovidDataProps> = ({ covidData }) => {
	return (
		<>
			<Typography>Active Cases: {covidData.active}</Typography>
			<Typography>Total Cases: {covidData.cases}</Typography>
			<Typography>Total Deaths: {covidData.deaths}</Typography>
			<Typography>Recovered: {covidData.recovered}</Typography>
			<Typography>New Cases: {covidData.todayCases}</Typography>
			<Typography>New Deaths: {covidData.todayDeaths}</Typography>
			<Typography>
				Cases Per One Million: {covidData.casesPerOneMillion}
			</Typography>
		</>
	);
};
export default CovidData;
