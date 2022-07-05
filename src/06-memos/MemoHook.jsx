import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumbers = 100) => {
	for( let i = 0; i < iterationNumbers; i++) {
		console.log('here it goes');
	};

	return `${iterationNumbers} iterations made`;
}

export const MemoHook = () => {
	const { counter, increase } = useCounter(4000);
  const [show, setShow] = useState(true);

	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter: <small>{ counter }</small>
			</h1>
			<hr />
			<h4>{ memorizedValue }</h4>
			<button className="btn btn-primary" onClick={() => increase()}>
				+1
			</button>
      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
          Show/Hide {JSON.stringify(show)}
      </button>
		</>
	);
};
