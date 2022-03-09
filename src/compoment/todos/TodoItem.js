import React from "react";
import {
  MdRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import TodoUpdate from "./TodoUpdate";

import moment from "moment";

const TodoItemDiv = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  .inputStyle {
    display: flex;
    margin-left: 10px;
    size: 20px;
    font-size: 10px;
    color: #7289f7;
    text-decoration: ${(props) => props.checked && "line-through"};
  }

  .checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #8b9ae2;

    font-size: 1.5rem;
  }

  .text {
    margin-left: 0.5rem;
    font-weight: 600;
    width: 120px;
    color: #2b4ff9;
    flex: 1;
    text-align: left;
    text-decoration: ${(props) => props.checked && "line-through"};
    display: flex;
    background: #fffae7;
    border: #fffae7;
  }

  .removeBtn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #a2a3aa;

    cursor: pointer;
    &:hover {
      color: #f91c1c;
    }
  }
`;

const TodoItemVirtualized = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;

    &:nth-child(even) {
      background: #e5e5e5;
      .text {
        width: 120px;
        background: #e5e5e5;
        color: #a78cf2;
        text-decoration: ${(props) => props.checked && "line-through"};
      }
    }
  }
`;

//()안에는 props 밖에 못온다 => 비구조화할당으로 꺼냈다.
function TodoItem({
  style,
  todo,
  handleRemove,
  handleToggle,

  handleModify,
}) {
  //비구조화 할당
  const { _id, text, checked } = todo;

  const nowTime = moment().format("YYYY-MM-DD");

  return (
    <TodoItemVirtualized className="TodoItem-virtualized" style={style}>
      <TodoItemDiv checked={checked}>
        <div
          className="checkbox"
          onClick={() => handleToggle({ _id, checked })}
        >
          {checked ? (
            <MdOutlineRadioButtonChecked />
          ) : (
            <MdRadioButtonUnchecked />
          )}
        </div>
        {/* 클릭시 바꾸기 togle gogo */}
        <div className="inputStyle">{nowTime}</div>

        <input
          className="text"
          value={text}
          //기존에 있는 핸들 모디파이를
          //제출할 때
          onChange={(e) => {
            const text = e.target.value;
            handleModify({ _id, text });
          }}
        />

        <div className="removeBtn" onClick={() => handleRemove(_id)}>
          <MdRemoveCircleOutline />
        </div>
      </TodoItemDiv>
    </TodoItemVirtualized>
  );
}

export default React.memo(TodoItem);
