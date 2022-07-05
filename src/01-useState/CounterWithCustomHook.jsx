import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const { counter, increase, decrease, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>
      <hr />

      <button className="btn btn-primary" onClick={(e) => increase(2)}>+1</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={(e) => decrease(2)}>-1</button>
    </>
  )
}
