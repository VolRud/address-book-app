import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  getContacts, changeContactFormState, findContact, } from '../../store/AC/contactsList';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss'
import Contact from '../../components/Contact/Contact';
import { Link, } from 'react-router-dom';

class ContactsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.handleFind = this.handleFind.bind(this);
    }

    componentDidMount(){
        const { getContacts, contactsLoaded, } = this.props;
        if(!contactsLoaded){
            getContacts();
        }
    }

    showContacts = () => {
        const { filteredContacts, } = this.props;
        if(!filteredContacts) return;
        if(filteredContacts.length === 0){
            return <p> No contacts ...</p>
        } else {
            return filteredContacts.map(contact=><Contact key={contact.id} contactData={contact} {...this.props} />)
        }
    }

    addNewContact = () => {
        this.props.changeContactFormState({
            type:'addNew',
            name: '',
            email: '',
        });
    }

    handleFind(e){
        this.props.findContact(e.target.value);
    }

    render() {
        return (
        <div className={styles.contactsWrap} >
            <h1>My address Book</h1>
            <input 
                type="text"
                onChange={this.handleFind} 
                placeholder='Search...'/>
            {this.showContacts()}
            <Link to='/create-contact'>
                <div className={styles.addNew} onClick={this.addNewContact}>+</div>
            </Link>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { contacts, contactsLoaded, findContact, } = state.contactsList;
    let filteredContacts = [];
    if(findContact===''){
        filteredContacts = contacts;
    } else {
        filteredContacts = contacts.filter(contact=>{
            const f = findContact;
            const { name, email, } = contact;
            if(name.toLowerCase().search(f)!==-1 || email.toLowerCase().search(f)!==-1){
                return true;
            } else {
                return false;
            }
        })
    }
    return {
        filteredContacts, contactsLoaded, findContact,
    };
  };
  
  const mapDispatchToProps = dispatch => (
    {
      getContacts: () => dispatch(getContacts()),
      changeContactFormState: (formData) => dispatch(changeContactFormState(formData)),
      findContact: (value) => dispatch(findContact(value)),

    }
  );
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
  
  ContactsList.propTypes = {
    getContacts: PropTypes.func.isRequired,
    changeContactFormState: PropTypes.func.isRequired,
    contactsLoaded: PropTypes.bool.isRequired,
  };