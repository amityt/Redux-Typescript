import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core";

interface LinearProgressProps {
	value: number;
	isDefault?: boolean;
}

const useStyles = makeStyles((theme) => ({
	barColorPrimary: {
		// background: (props) =>
		// 	props >= 40 && props <= 60 ? "yellow" : props >= 70 ? "green" : "red",
		backgroundColor: "#F0F0F0",
	},
}));

const LinearProgressBar: React.FC<LinearProgressProps> = ({
	value,
	isDefault,
}) => {
	const data = value * 10;
	const classes = useStyles(data);
	return (
		<div>
			<LinearProgress
				variant="determinate"
				className={classes.barColorPrimary}
				value={data}
			/>
		</div>
	);
};

export default LinearProgressBar;
