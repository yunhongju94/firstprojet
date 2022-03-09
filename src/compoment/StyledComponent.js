import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: blue;
  padding: 1rem;
  display: flex;
`;

const Button = styled.div`
  background: ${(props) => props.color || "lightgray"};
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: lightcoral;
  }
`;

function StyledComponent() {
  return (
    <Box>
      <Button color="black">안녕하세요</Button>
      <Button>안녕히계세요</Button>
    </Box>
  );
}

export default StyledComponent;
