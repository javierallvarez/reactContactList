import React, { useEffect, useState } from 'react';
import { ContactClass } from '../models/contact.class';
import Contact from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {

    const defaultContact = new ContactClass(
        'Marge', 
        'Simpson', 
        'marge@email.com', 
        false);
        
    const defaultContact2 = new ContactClass(
        'Morticia', 
        'Addams', 
        'morticia@email.com', 
        true);
    
    const defaultContact3 = new ContactClass(
        'Sheldon', 
        'Cooper', 
        'sheldon@email.com', 
        true);
    
    const defaultContact4 = new ContactClass(
        'Stewie', 
        'Griffin', 
        'stewie@email.com', 
        true);
    

    const [contactos, setContactos] = useState([defaultContact, defaultContact2, defaultContact3, defaultContact4]);
    
    const [loading, setLoading] = useState(true);

   
   /* A hook that is executed when the component is mounted and when the component is unmounted. */
    useEffect(() => {
        console.log('Contact state has been modified')
        setLoading(false)
        return () => {
            console.log('Contact list component is going to unmount')
        };
    }, [contactos]);

    
    /**
     * We're using the spread operator to create a copy of the contacts array,
     * then we're using the indexOf method to find the index of the contact
     * that was clicked, then we're using the spread operator again to create
     * a copy of the contact object.
     * Then we use the not operator to change the value of the connected property.
     * In the last line we are using the setContacts method to update
     * the state of the component
     */
    function contactStatus(contacto){
        console.log(contacto, ' is online');
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos]
        tempContacts[index].connected = !tempContacts[index].connected;
        setContactos(tempContacts)
    }


   /**
    * It adds a contact to the contact list.
    */
    function addContact(contacto){
        console.log('Adding', contacto, 'in contact list');
        setContactos([contacto, ...contactos]);
    }
   

   /**
    * It deletes the contact from the list.
    */
    function deleteContact(contacto){
        console.log(contacto, ' was deleted');
        const index = contactos.indexOf(contacto);
        const tempContacts = [...contactos];
        tempContacts.splice(index,1);
        setContactos(tempContacts);
    }



    return (
        <div className='card'>
            
            <div style={ {background: '#eee'} }>
                <h2 className='card-header p-3'>Add contact: </h2>
                <ContactForm add={ addContact }></ContactForm>
            </div>

            <div className='card-header p-3'>
                <h2>My Contact List:</h2>
            </div>

            <div>
                <div className='all-contacts'>
                    { contactos.map((contacto, index) => {
                        return (
                            <Contact 
                                key={index}
                                contacto={contacto}
                                connect={contactStatus}
                                remove={deleteContact}>
                            </Contact>
                            )
                        }  
                    )} 
                </div>         
            </div>

            <div className='card-footer p-3 cardFooter'>
                <small>Made with Love and React</small>
            </div>
                
        </div>
    )
}    

export default ContactList;
