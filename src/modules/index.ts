import {combineReducers} from 'redux';
import counter from "./counter";
import posts from "./posts";
// import posts, {postsSaga} from "./posts";
// import {all} from "redux-saga/effects";


const rootReducer = combineReducers({counter, posts});

// export function* rootSaga(){
//     yield all([counterSaga(), postsSaga()]);
// }
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;