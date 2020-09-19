import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import Alert from "./components/alert";
import Weather from "./components/weather";
import { Paper, Tabs } from "@material-ui/core";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import Covid from "./components/covid";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./components/tabs";

const App: React.FC = () => {
	const dispatch = useDispatch();
	const error = useSelector((state: RootState) => state.weather.error);
	const alertMsg = useSelector((state: RootState) => state.alert.message);

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div>
			<div
				style={{
					maxWidth: 500,
					height: "100%",
					margin: "0 auto",
				}}>
				<Paper>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="fullWidth">
						<Tab label="Weather" />
						<Tab label="Covid-19" />
					</Tabs>
				</Paper>
				<TabPanel value={value} index={0}>
					<>
						<Weather />

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
					</>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Covid />
				</TabPanel>
			</div>
		</div>
	);
};

export default App;
