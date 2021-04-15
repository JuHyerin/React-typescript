import {useSelector, useDispatch} from "react-redux";
import Counter from "../components/Counter";
import {decrease, increase} from "../modules/counter";
import {RootState} from '../modules'
// import {decreaseAsync, increaseAsync} from "../modules/counter";

function CounterContainer () {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.counter.count);

    // const onIncrease = () => dispatch({type: 'INCREASE'});
    // const onDecrease = () => dispatch({type: 'DECREASE'});

    const onIncrease = () => {
        // dispatch(increaseAsync());
        dispatch(increase());
    };
    const onDecrease = () => {
        // dispatch(decreaseAsync());
        dispatch(decrease());
    };


    return (
        <Counter number={state} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
}

export default CounterContainer;