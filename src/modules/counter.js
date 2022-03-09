import { createAction, handleActions } from "redux-actions";

// 1. 액션 타입을 정의한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const RESET = "counter/RESET";

//2. 액션 생성 함수를 만들어요.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const reset = createAction(RESET);

//3.state ,state를 변경시킬 reducer
const init = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state) => ({ number: state.number + 1 }),
    [DECREASE]: (state) => ({ number: state.number - 1 }),
    [RESET]: () => init,
  },
  init
);

export default counter;
