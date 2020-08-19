import React from 'react';
import useCounter from '../../hooks/useCounter';

import './counter.scss'

const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(100);
    const factor = 2

    return (
        <>
            <h1>Counter with Hooks: { counter } </h1>
            <hr/>
            <button onClick={ () => increment(factor) } className='btn btn-warning m-2'>+{factor}</button>
            <button onClick={()=> reset()} className='btn btn-warning m-2' > Reset </button>
            <button onClick={ () => decrement(factor) } className='btn btn-warning m-2'>-{factor}</button>
        </>
    )
}

export default CounterWithCustomHook
