import { useState } from "react";

export const useCounter = (initialValue = 10) => {
	const [counter, setCounter] = useState(initialValue);

	const increase = (value = 1) => {
		setCounter(counter + value);
	};

	const decrease = (value = 1) => {
		if (!counter) return;
		setCounter(counter - value);
	};

	const reset = () => {
		setCounter(initialValue);
	};

	return {
		counter,
		increase,
		decrease,
		reset,
	};
};
