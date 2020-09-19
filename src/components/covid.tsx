import { Button, InputBase } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
	getCoronaDetails,
	setCovidLoading,
} from "../store/actions/coronaActions";
import CovidData from "./covidData";

const Covid: React.FC = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const valueChange = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setSearch(event.target.value);
	};
	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(setCovidLoading());
		dispatch(getCoronaDetails(search));
	};
	const covidData = useSelector((state: RootState) => state.corona.data);
	const loading = useSelector((state: RootState) => state.corona.loading);
	console.log(covidData);
	return (
		<div>
			<div>
				<form onSubmit={handleSearch}>
					<InputBase
						placeholder="Enter country to search"
						value={search}
						onChange={valueChange}
					/>
					<Button type="submit">Search</Button>
				</form>

				{loading ? (
					<p>Loading...</p>
				) : (
					covidData && <CovidData covidData={covidData} />
				)}
			</div>
		</div>
	);
};

export default Covid;
