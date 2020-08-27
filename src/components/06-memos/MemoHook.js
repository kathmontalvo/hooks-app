import React, { useState, useMemo } from 'react';
import useCounter from '../../hooks/useCounter';

import '../02-useEffect/effect.scss';
import procesoPesado from '../../helpers/procesoPesado';

const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true)
    const factor = 1;

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {counter} </small> </h3>
            <hr/>
            <p> { memoProcesoPesado } </p>
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

export default MemoHook
