import React from 'react';
import './effect.scss';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange, clearForm] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        clearForm()
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1> FormWithCustomHook </h1>
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

            <div className='form-group'>
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='******'
                    value={ password }
                    onChange = { handleInputChange}
                />
            </div>

            <button className='btn btn-primary' type='submit'>
                Guardar
            </button>

        </form>
    )
}

export default FormWithCustomHook
