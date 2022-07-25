import React from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from '../models/contact.class';
import '../styles/background.scss'

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let red = getRndInteger(0, 100);
let green = getRndInteger(0, 250);
let blue = getRndInteger(100, 200);



// ? Estilo para usuario logueado:
const randomColor = {
    // backgroundColor: `rgb(${red},${green},${blue})`
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
};




const Contact = ({ contacto, connect, remove }) => {

    
    /**
     * If the contact is connected, return a green toggle-on icon, otherwise return a red toggle-off icon
     */
    function contactIconConnected(){
        if(contacto.connected){
            return (<i onClick={() => connect(contacto)} className='bi-toggle-on cursor task-action transition' style={ { color: '#5ed0ef', fontSize: '18px' } }></i>)
        } else {
            return (<i onClick={() => connect(contacto)} className='bi-toggle-off cursor task-action transition' style={ { color: '#eee', fontSize: '18px' } }></i>)
        }
    }
    

    return (
        <div className='contact-bar'>
            <div className='circle-box' style={ {width: '20%'} }>
                <div className='circle' style={randomColor}>{ contacto.firstName[0] }{ contacto.lastName[0] }
                </div>
            </div>

            <div className='contact' style={ {width: '60%'} }>
                <p className='name'>
                    { contacto.firstName } { contacto.lastName }
                </p>

                <p className='text-secondary'>{ contacto.email }
                </p>
            </div>
            
            <div className='bar-end' style={ {width: '20%'} }>
                <div>
                    {/* Run the funtion which show if the user is connected */}
                    { contactIconConnected() } 
                    <p className='text-secondary' style={ {fontSize: '10px'} }>{ contacto.connected ? 'Online':'Offline'}</p>
                </div> 
                
                <div>
                    <i  onClick={() => remove(contacto)} 
                        className='bi-trash task-action cursor' 
                        style={ { color: 'gray', fontSize: '18px' } }>
                    </i> 
                </div>   
            </div>

        </div>
    )
}


Contact.propTypes = {
    contacto: PropTypes.instanceOf(ContactClass).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default Contact;