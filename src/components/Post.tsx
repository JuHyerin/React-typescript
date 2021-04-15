import React from 'react';
import { IPost } from "../api/posts";
interface IPostsProps {
    post: IPost;
}
function Post(props: IPostsProps) {
    const { title, body } = props.post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default Post;