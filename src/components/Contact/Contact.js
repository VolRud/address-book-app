import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss'

const editContact = (props) => {
    const { contactData: { name, email, id, }} = props;
    props.changeContactFormState({
        type: 'edit',
        name, email, id
    });
    props.history.push('/edit-contact');
}

const Contact = (props) => {
    const { contactData: { name, email }} = props;
    let isGmail = null;
    if(email.search('gmail')!==-1){
        isGmail = '(gmail account)'
    }
    return(
        <div className={styles.oneContact} onClick={()=>{editContact(props)}}>
            <span  className={styles.name}>{name} {isGmail}</span>
            <span  className={styles.email}>{email}</span>
            <div className={styles.close}></div>
        </div>
    )
}

export default Contact;

Contact.propTypes = {
    contactData: PropTypes.object.isRequired,
    changeContactFormState: PropTypes.func.isRequired,
};