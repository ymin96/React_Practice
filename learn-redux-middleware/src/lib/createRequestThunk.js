export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입을 정의한다.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return (param) => async (dispatch) => {
        dispatch({ type });
        try {
            const response = await request(param);
            dispatch({
                type: SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true,
            });
            throw e;
        }
    };
}
