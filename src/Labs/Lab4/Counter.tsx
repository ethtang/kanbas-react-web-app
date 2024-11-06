import React, { useState } from "react";
export default function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
        id="wd-counter-up-click" className="btn btn-success pill mb-3 me-2">Up</button>
      <button onClick={() => setCount(count - 1)}
        id="wd-counter-down-click" className="btn btn-danger pill mb-3">Down</button>
      <hr /></div>);
}