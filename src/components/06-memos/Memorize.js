import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

import '../02-useEffect/effect.scss';

const Memorize = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true)
    const factor = 1;

    return (
        <div>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={() => increment(factor) }
            >
                Incrementar
            </button>
            <button
                className='btn btn-secondary ml-3'
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show / Hide {JSON.stringify( show )}
            </button>
        </div>
    )
}

export default Memorize
