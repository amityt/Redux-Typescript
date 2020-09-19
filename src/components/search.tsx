import { Button, InputBase, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux";

interface SearchProps {
	title: string;
}

const Search: React.FC<SearchProps> = ({ title }) => {
	const dispatch = useDispatch();
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
	return (
		<div>
			<Typography variant="h5">{title}</Typography>
			<form onSubmit={submitHandler}>
				<InputBase placeholder="Enter city name" onChange={changeHandler} />
				<Button type="submit">Search</Button>
			</form>
		</div>
	);
};
export default Search;
