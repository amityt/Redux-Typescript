import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
	const api = process.env.REACT_APP_API_KEY;
	console.log(api);
	return (
		<div className="App">
			<h1>Hello!</h1>
		</div>
	);
};

export default App;
