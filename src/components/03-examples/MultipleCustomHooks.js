import React from 'react';
import '../02-useEffect/effect.scss'
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data  } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0] // !!data porque data inicia con valor "null" y !null es true, entonces !!null es false.

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                loading 
                ?
                    ( <div className='alert alert-warning text-center'>
                            Loading...
                    </div>)
                :
                    (<blockquote className='blockquote text-right'>
                        <p className='mb-0'> {quote} </p>
                        <footer className='blockquote-footer'> {author} </footer>
                    </blockquote>)
            }

            <button className='btn btn-primary' onClick={() => increment(1)}>
                Siguiente quote
            </button>

        </div>
    )
}

export default MultipleCustomHooks
