import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "../compoment/counter/Counter";
import { decrease, increase, reset } from "../modules/counter";

function CountContainer() {
  const number = useSelector((state) => state.counter.number);
  const dispath = useDispatch();

  return (
    <Counter
      number={number}
      increase={() => dispath(increase())}
      decrease={() => dispath(decrease())}
      reset={() => dispath(reset())}
    />
  );
}

export default CountContainer;
