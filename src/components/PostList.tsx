import React from 'react';
import { Link } from 'react-router-dom';
import {IPost} from "../api/posts";

type PostListProps = {
    posts: Array<IPost>;
}
function PostList({ posts }: PostListProps) {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link to={`/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default PostList;