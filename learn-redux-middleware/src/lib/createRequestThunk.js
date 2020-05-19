import {finishLoading, startLoading} from '../modules/loading'

export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입을 정의한다.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return (param) => async (dispatch) => {
        dispatch({ type });
        dispatch(startLoading(type));
        try {
            const response = await request(param);
            dispatch({
                type: SUCCESS,
                payload: response.data,
            });
            dispatch(finishLoading(type));
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true,
            });
            dispatch(finishLoading(type));
            throw e;
        }
    };
}
