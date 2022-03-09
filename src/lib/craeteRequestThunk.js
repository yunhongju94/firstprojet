import { finishLading, startLoading } from "../modules/loading";

export const createActionType = (type) => {
  const SECCESS = `${type}_SUCCESS`;
  const FAIULRE = `${type}_FAILURE`;

  return [type, SECCESS, FAIULRE];
};

export default function craeteRequestThunk(type, requset) {
  const SECCESS = `${type}_SUCCESS`;
  const FAIULRE = `${type}_FAILURE`;

  return (param) => async (dispatch) => {
    dispatch({ type }); //요청이 시작된 것을 알림
    dispatch(startLoading(type));
    try {
      //요청성공

      const res = await requset(param);

      dispatch({
        type: SECCESS,
        payload: res.data,
      });

      dispatch(finishLading(type));
    } catch (error) {
      //요청 실패(에러가 발생)
      dispatch({
        type: FAIULRE,
        payload: error,
        error: true,
      });
      dispatch(startLoading(type));
      throw error;
    }
  };
}
