import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import {RootState} from "../modules";
import {getPostsThunk} from "../modules/posts";


function PostListContainer() {
    const { data, loading, error } = useSelector((state:RootState) => {
        console.log('select postlist')
        return state.posts.posts
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if(data) return;
        dispatch(getPostsThunk());
    },[data, dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <PostList posts={data} />;
}

export default PostListContainer;