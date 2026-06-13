import { useState } from 'react'

export default function ContactForm( { cv, onChange }) {
    const [repeatEmailTouched, setRepeatEmailTouched] = useState(false);

    return (
        <fieldset 
            className="contact-information"
        >
            <legend className='section-headline'>Contact Information</legend>
            <div className='contact-info-container'>
                <div className="form-element">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        value={cv.contactInfo.firstName}
                        type="text"
                        onChange={(e) => onChange('firstName', e.target.value)}
                        required
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        value={cv.contactInfo.lastName}
                        type="text"
                        onChange={(e) => onChange('lastName', e.target.value)}
                        required
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        value={cv.contactInfo.email}
                        type="email"
                        onChange={(e) => onChange('email', e.target.value)}
                        required
                    />
                </div>
                <div className="form-element">
                    <label htmlFor="repeatEmail">Repeat Email</label>
                    <input
                        id="repeatEmail"
                        value={cv.contactInfo.repeatEmail}
                        type="email"
                        onChange={(e) => {
                            e.target.setCustomValidity(e.target.value !== cv.contactInfo.email ? 'Emails must match' : '');
                            onChange('repeatEmail', e.target.value)}
                        }
                        onBlur={() => setRepeatEmailTouched(true)}
                        required
                    />
                    <div className='error-message'>
                        {repeatEmailTouched 
                        && cv.contactInfo.email !== cv.contactInfo.repeatEmail
                        && "emails must match"}
                    </div>
                </div>
                <div className="form-element">
                    <label htmlFor="phone">Phone</label>
                    <input
                        value={cv.contactInfo.phone}
                        id="phone"
                        type="tel"
                        onChange={(e) => onChange('phone', e.target.value)}
                        required
                    />
                </div>
            </div>
        </fieldset>
    )
}