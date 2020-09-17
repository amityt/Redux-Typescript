import { Button, Typography } from "@material-ui/core";
import React from "react";

interface AlertProps {
	message: string;
	onClose: () => void;
}
const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
	return (
		<div>
			<div>
				{message.length ? (
					<>
						<Typography style={{ color: "red" }}>{message}</Typography>
						<Button onClick={onClose}>Close</Button>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default Alert;
