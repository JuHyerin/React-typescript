import PostContainer from "../containers/PostContainer";
type PostPageProps = {
    match: any
}
function PostPage(props: PostPageProps) {
    console.log('--------PostPage rendered')
    const {id} = props.match.params;
    return <PostContainer postId={parseInt(id,10)}/>;
}

export default PostPage;