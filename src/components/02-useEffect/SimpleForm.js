import React, { useEffect, useState } from 'react';
import './effect.scss';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(()=> {
        console.log('hey');
    }, []);

    useEffect(()=> {
        console.log('form state cambió');
    }, [formState]);

    useEffect(()=> {
        console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ] : target.value
        })
        // console.log(formState, {[target.name] : target.value});
    }

    return (
        <>
            <h1> useEffect </h1>
            <hr/>

            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Escribe tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange = { handleInputChange}
                />
            </div>
            
            <div className='form-group'>
                <input 
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Escribe tu email'
                    autoComplete='off'
                    value={ email }
                    onChange = { handleInputChange}
                />
            </div>

        </>
    )
}

export default SimpleForm
