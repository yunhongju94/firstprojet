import React, { useState } from "react";

function Counter({ number, increase, decrease, reset }) {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={increase}>-</button>
      <div>{number}</div>
      <button onClick={decrease}>+</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Counter;
