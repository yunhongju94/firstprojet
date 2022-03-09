import React, { useState } from "react";
import styled from "styled-components";
import { ImWrench } from "react-icons/im";

import { FaExchangeAlt } from "react-icons/fa";

const UpdateStyled = styled.div`
  button {
    background: none;
    outline: none;
    border: none;
    color: #a2a3aa;
    align-items: center;
    padding-right: 1rem;

    cursor: pointer;
    &:hover {
      color: #f91c1c;
    }
  }
  input {
    background: #b4bbdd;
    outline: none;
    border: 2px solid #dee2e6;
    width: auto;
    font-weight: 400;
    font-size: 1.2rem;
    width: 120px;
    color: white;

    flex: 1;

    &::placeholder {
      color: #dee2e6;
    }
  }
`;

function TodoUpdate({ id, handleUpdate, text }) {
  const [updateToggle, setUpdateToggle] = useState(false);

  return (
    <UpdateStyled>
      {updateToggle ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              setUpdateToggle(false);
            }}
          >
            <input
              placeholder="Update Todo!!"
              required
              value={text}
              onChange={(e) => handleUpdate(id, e.target.value)}
            />

            <button type="submit">
              {" "}
              <FaExchangeAlt />
            </button>
          </form>
        </div>
      ) : (
        <button type="submit" onClick={() => setUpdateToggle(!updateToggle)}>
          <ImWrench />
        </button>
      )}
    </UpdateStyled>
  );
}

export default TodoUpdate;
