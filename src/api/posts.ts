import axios from "axios";

export const getPosts = async () => {
    const response = await axios.get<IPost[]>('http://localhost:4000/posts');
    return response.data;

}
export const getPostById = async (id: number) => {
    const response = await axios.get<IPost>(`http://localhost:4000/posts/${id}`);
    return response.data;

}


// export interface Posts {
//     posts: Array<Post>;
// }
export interface IPost {
    id: number;
    title: string;
    body: string;
}
