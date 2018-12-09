import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';
import { connect, } from 'react-redux';
import { createNewContact, deleteContact, changeContactFormState, updateContact, } from '../../store/AC/contactsList'
import { emailValidator, } from '../../utils/validators';
import { Link, } from 'react-router-dom';
class ContactForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            wrongEmail: false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
      }
      
    handleChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        })
        if(this.state.wrongEmail){
            this.setState({
                wrongEmail: false
            })
        }
    }
    componentDidMount(){
        const { formData, history, } = this.props;
        if(formData && formData.type === null){
            history.push('/')
        } else {
            this.setState({
                name: formData.name, 
                email:formData.email
            })
        }
    }
    delete = () => {
        const { deleteContact, formData:{id}, } = this.props;
        deleteContact({id});
    }
    confirm = () => {
        const { formData: {type, id,}, createNewContact, updateContact, history, } = this.props;
        const { name, email, } = this.state;
        if(!emailValidator(email)){
            this.setState({ wrongEmail: true })
            return;
        }
        if(type==='addNew'){
            createNewContact({ name, email });
        }
        if(type==='edit'){
            updateContact({ id, name, email, });
        }
        history.push('/');
    }

    render(){
        const { wrongEmail, } = this.state;
        const { formData, history, } = this.props;
        if(formData && formData.type === null) return null;
        const { type, } = formData;
        return(
            <div className={styles.contactFormWrapper}>
                <h1>My Address Book / {type==='addNew' ? 'New contact' : 'Edit contact'}</h1>
                <input 
                    type="text"
                    defaultValue={this.state.name} 
                    onChange={this.handleChangeName} 
                    placeholder='Name'/>
                <input 
                    type="text" 
                    defaultValue={this.state.email} 
                    onChange={this.handleChangeEmail}
                    className={wrongEmail ? styles.redBorder : null}
                    placeholder='Email'/>
                {wrongEmail ? <span>Wrong email!</span> : null}
                
                <div className={styles.buttons}>
                    {type==='edit' ? 
                    <Link to='/'>
                        <div className={styles.delete} onClick={this.delete}>Delete</div>
                    </Link>
                    :null}
                    <div className={styles.buttonsCreateUser}>
                        <div className={styles.cancel} onClick={()=>{history.push('/')}}>Cancel</div>
                        <div className={styles.confirm} onClick={this.confirm}>Ok</div>
                    </div>
                </div>
            </div>
        )
    }
}   

const mapStateToProps = (state) => {
    const { formData, } = state.contactsList;
    return {
         formData,
    };
  };
  
const mapDispatchToProps = dispatch => (
  {
      createNewContact: (newContact) => dispatch(createNewContact(newContact)),
      deleteContact: (id) => dispatch(deleteContact(id)),
      changeContactFormState: (formData) => dispatch(changeContactFormState(formData)),
      updateContact: (updContact) => dispatch(updateContact(updContact)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
 
ContactForm.propTypes = {
    changeContactFormState: PropTypes.func.isRequired,
    createNewContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired,
};