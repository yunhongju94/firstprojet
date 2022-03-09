import React, { useContext } from "react";
import colorContext, { ColorConsumer } from "../../context/color";

const colors = ["red", "orange", "yellow", "green", "indigo", "violet"];

function ColerSelector() {
  const { action } = useContext(colorContext);
  return (
    <div>
      <div>Choose Color</div>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={() => action.setColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColerSelector;
