import styles from './ContactStyles.module.css'
import {useForm, ValidationError } from '@formspree/react'

function Contact() {
    const [state, handleSubmit] = useForm('mwpkkajl')
    if (state.succeeded) {
        return (
            <div className={styles.formSubmitResponse}>
                <p> 
                    Thank you for your message! <br/>
                    I will get back to you shortly!
                </p>
            </div>
        )
    }
    return (
        <section id='contact' className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor='name' hidden>
                        Name
                    </label>
                    <input type='text' name='name' id='name' placeholder='Name' required />
                </div>
                <div className='formGroup'>
                    <label htmlFor='email' hidden>
                        Email
                    </label>
                    <input type='text' name='email' id='email' placeholder='Email' required />
                    <ValidationError
                        prefix='Text'
                        field='email'
                        errors={state.errors}
                    />
                </div>
                <div className='formGroup'>
                    <label htmlFor='message' hidden>
                        Message
                    </label>
                    <textarea type='text' name='message' id='message' placeholder='Message' required></textarea>
                    <ValidationError
                        prefix='Text'
                        field='message'
                        errors={state.errors}
                    />
                </div>
                <div style={{placeContent: 'center', display: 'flex'}}>
                    <div className="g-recaptcha" data-sitekey="6LdeIGQqAAAAAJWjxLZvkz4i2tnMbiynWPFyAU0U" data-callback='recaptchaCallback'></div>
                </div>
                <input className='hover btn' type='submit' disabled value='Submit' id='submitButton' onClick='validateForm(this)' />
            </form>
        </section>
    )
}

export default Contact