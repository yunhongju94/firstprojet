import { createContext, useState } from "react";

const colorContext = createContext({
  state: { color: "black" },
  action: { setColor: () => {} },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");

  const value = {
    state: { color },
    action: { setColor },
  };

  return (
    <colorContext.Provider value={value}>{children}</colorContext.Provider>
  );
};

const ColorConsumer = colorContext.Consumer;

export { ColorProvider, ColorConsumer };

export default colorContext;
