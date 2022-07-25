import React from 'react';
import { useRef } from 'react';
import { ContactClass } from '../../models/contact.class';
import PropTypes from 'prop-types';


/** El form recibe una función con prop {add}.
 * Pasamos add a la función y al proptypes.
 * */
const ContactForm = ({ add }) => {

    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')


    // Añade un contacto sin recargar la página:
    function addContact(e){
        e.preventDefault();
        const newContact = new ContactClass(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            true
        )
        add(newContact)
    }


    return (
        <div>
            <form onSubmit={ addContact }
            className='justify-content-center align-items-center mb-6'>

            <div>
                <div className='name-bars-box'>
                    <input
                        ref={ firstNameRef} 
                        id='inputFirstName'
                        type='text'
                        className='form-control form-control-lg name-bars'
                        placeholder='First name'
                        required autoFocus>
                    </input>
                    
                    <input
                        ref={ lastNameRef} 
                        id='inputLastName'
                        type='text'
                        className='form-control form-control-lg name-bars'
                        placeholder='Last name'
                        required autoFocus>
                    </input>
                </div>

                <input
                    ref={ emailRef} 
                    id='emailName'
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Email'
                    required autoFocus>
                </input>

            </div>

            <button
                type='submit'
                className='btn'>
                Add</button>

            </form>
        </div>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
