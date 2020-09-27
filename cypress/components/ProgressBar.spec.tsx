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
