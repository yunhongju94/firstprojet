const loogerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log("이전 상태:", store.getState());
  console.log("액션: ", action);
  next(action); // 실행을 한다.
  console.log("현재 상태", store.getState());
  console.groupEnd();
};

export default loogerMiddleware;

// function loogerMiddle(store){
//     return function(next){
//         return function(action){}
//     }
// }
