import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contact-form-content'>
            <form action="https://api.web3forms.com/submit" method="POST">
                <div className='name-contaniner'>
                <input type="hidden" name="access_key" value="95a6a55b-f6ed-4ca3-9119-c538f4846c9b" />
                    <input type='text' name='firstname' required placeholder='First Name' />
                </div>
                <input type='text' name='lastname' required placeholder='Last Name' />

                <input type='email' name='email' required placeholder='Email'/>
                <textarea type="text" name='message' required placeholder='Message' rows={3}></textarea>
                <button>SEND</button>

            </form>

        </div>
    )
}

export default ContactForm
