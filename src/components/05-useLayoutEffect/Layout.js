import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.scss'
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const Layout = () => {

    const { counter, increment } = useCounter(1);
    const [boxSize, setBoxSize] = useState({});

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0] // !!data porque data inicia con valor "null" y !null es true, entonces !!null es false.

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag);
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect -Breaking bad quotes</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p 
                    className='mb-0'
                    ref = { pTag }
                > {quote} </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button className='btn btn-primary' onClick={() => increment(1)}>
                Siguiente quote
            </button>

        </div>
    )
}

export default Layout
