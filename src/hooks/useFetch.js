import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
    
    if(!url)throw Error;

    const isMounted = useRef(true); // La idea del useRef es q mantenga la referencia cuando este hook esta vivo o el comp q lo usa sigue montado. 
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return(()=>{
            isMounted.current = false;
        })
    }, [])

    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } 
            })
    }, [url]);

    return state;

}

export default useFetch
