import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {useEffect} from "react";
import {getPostThunk} from "../modules/posts";

type PostContainerProps = {
    postId: number;
}

function PostContainer (props: PostContainerProps) {
    console.log('--------PostContainer rendered')
    const {data, loading, error} = useSelector(
        (state:RootState) => {
            console.log('select post')
            return state.posts.post[props.postId]
        }
    ) || {
        loading: false,
        data: null,
        error: null
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if(data) return;
        dispatch(getPostThunk(props.postId));
        console.log('dispatch api')
        // return () => {
        //     dispatch(clearPost());
        // }
    }, [dispatch, props.postId, data]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <Post post={data}/>;

}

export default PostContainer;