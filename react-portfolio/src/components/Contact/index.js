import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {

            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        if (e.target.name === 'name') {
            if (e.target.value === '') {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (e.target.name === 'message') {
            if (e.target.value === '') {
                setErrorMessage(`${e.target.name} is required`);
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className='bg-secondary'>
            <div className='container'>
                <div className="">                
                    <h1 className='text-left'>Contact me</h1>
                    <form id='contact-form' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor='email'>Email address:</label>
                            <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor='message'>Message:</label>
                            <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}/>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;