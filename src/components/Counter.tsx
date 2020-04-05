import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { decrementAction, incrementAction, resetAction } from "../store/counter/actions";
import { Button } from "./Button";

export const Counter: React.FC = () => {
  const currentCount = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementAction());
  const handleDecrement = () => dispatch(decrementAction());
  const handleReset = () => dispatch(resetAction());

  return (
    <div>
      <div>{currentCount.value}</div>
      <Button label="Uppp" onClick={handleIncrement} /><br />
      <button name="Down" onClick={handleDecrement}>Down</button><br />
      <button name="Reset" onClick={handleReset}>Reset</button><br />
    </div>
  );
}


