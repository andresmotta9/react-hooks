import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
	const [counter, setCounter] = useState(10);
	const incrementFather = useCallback((value) => {
		setCounter((count) => count + value);
	}, [],);

	return (
		<>
			<h1>useCallBack Hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={incrementFather} />
		</>
	);
};
