import * as postsAPi from '../api/posts'
import {ThunkAction} from "redux-thunk";
import {RootState} from "./index";
// import {createStandardAction} from "typesafe-actions/dist/deprecated/create-standard-action";
import {IPost} from "../api/posts";
// import {AxiosError} from "axios";
// import {ActionType, createAsyncAction, createReducer} from "typesafe-actions";
import {AnyAction} from "redux";



/*Action Type*/
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

/*Thunk*/
export function getPostsThunk ():ThunkAction<void, RootState, null, AnyAction> {
    return async dispatch => {
        dispatch({type: GET_POSTS});
        try{
            const payload = await postsAPi.getPosts();
            dispatch({type: GET_POSTS_SUCCESS, payload});
        }catch (e) {
            dispatch({type: GET_POSTS_ERROR, payload:e});
        }
    };
};
export function getPostThunk (id: number): ThunkAction<void, RootState, null, AnyAction> {
    return async dispatch => {
        dispatch({type: GET_POST});
        try {
            const payload = await postsAPi.getPostById(id);
            dispatch({type: GET_POST_SUCCESS, payload, meta: id});
        }catch (e) {
            dispatch({type: GET_POST_ERROR, payload:e, meta: id});
        }
    };
}



/*State*/
type PostsState = {
    posts: {
        loading: boolean;
        data: IPost[] | null;
        error: Error | null;
    },
    post?: any
}
const initialState:PostsState = {
    posts:{
        loading: false,
        data: null,
        error: null
    },
    post:{}
}


/*Reducer*/
export default function posts(state = initialState, action: AnyAction) {
    const id = action.meta;
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }};
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.payload,
                    error: null
                }};
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            };
        case GET_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: {
                        loading: true,
                        data: null,
                        error: null
                    }
                }
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: {
                        loading: true,
                        data: action.payload,
                        error: null
                    }
                }
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: {
                        loading: true,
                        data: null,
                        error: action.payload
                    }
                }
            }
        default:
            return state;
    }
}


