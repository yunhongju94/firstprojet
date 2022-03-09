import client from "../api";

//get : http://localhost:4000/api/todos
//파라메터가 필요 없는부분
export const fetchAll = () => client.get("/api/todos");
//파라미터가 필요한 부분
export const insertTodo = (text) => client.post("/api/todos", { text });

// 오브젝트로 받아 Thunk param을 보낸다
//Thunk param에 제값이 들어갔는지 확인
//500 에러는 백엔드에서 에러
//Seccues 가 됫을경우 디비에 접속은 OK
//FAILURE 인경우엔 DB에 접근 안됬음

//삭제
export const removeTodo = (id) => client.delete(`/api/todos/${id}`);
//토글
export const checkedTodo = ({ _id, checked }) =>
  client.patch(`/api/todos/${_id}`, { checked: !checked });
//수정
export const updateTodo = ({ _id, text }) =>
  client.patch(`/api/todos/${_id}`, { text });
