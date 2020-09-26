import { LinearProgress } from "@material-ui/core";
import mount from "cypress-react-unit-test";
import React from "react";
import LinearProgressBar from "../../src/components/linearProgressBar";

//Demo Test 17
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
