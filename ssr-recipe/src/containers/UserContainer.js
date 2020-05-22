import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { Preloader, usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    usePreloader(() => dispatch(getUser(id))); // 서버 사이드 렌더링을 할 때 API 호출하기

    useEffect(() => {
        // 사용자가 존재하고, id가 일치한다면 요청하지 않음
        if (user && user.id === parseInt(id, 10)) return;
        dispatch(getUser(id));
    }, [dispatch, id, user]); // id가 바뀔 때 새로 요청해야 함

    if (!user) return null;
    return <User user={user} />;
};

export default UserContainer;
