import React, { useState, useCallback, useEffect } from 'react';
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/effect.scss';

const CallbackHook = () => {

    const [counter, setCounter] = useState(100);

    const increment = useCallback( (num)=> {
        setCounter( c => c + num );
    }, [ setCounter ] );

    useEffect(() => {
        console.log('llamadita')
    }, [increment])

    return (
        <div>
            <h1>UseCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}

export default CallbackHook
