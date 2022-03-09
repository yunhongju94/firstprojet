import React, { useContext } from "react";
import colorContext, { ColorConsumer } from "../../context/color";

function ColorBox() {
  const { state, action } = useContext(colorContext);
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        background: state.color,
      }}
    ></div>
  );
}

export default ColorBox;
