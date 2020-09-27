import { LinearProgress } from "@material-ui/core";
import mount from "cypress-react-unit-test";
import React from "react";
import LinearProgressBar from "../../src/components/linearProgressBar";

describe("LinearProgressBar", () => {
	it("ProgressBar mount", () => {
		mount(<LinearProgressBar value={6} />);
	});
});

describe("LinearProgressBar2", () => {
	it("ProgressBar mount", () => {
		mount(<LinearProgressBar value={10} />);
	});
});

describe("LinearProgressBar2", () => {
	it("ProgressBar mount", () => {
		mount(<LinearProgressBar value={3} />);
	});
});

describe("LinearProgressBar2", () => {
	it("ProgressBar mount", () => {
		mount(<LinearProgressBar value={2} />);
	});
});
