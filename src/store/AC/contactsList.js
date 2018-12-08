import {
    GET_CONTACTS,
    CHANGE_CONTACT_FORM_STATE,
    CREATE_NEW_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FIND_CONTACT,
} from '../constants/contactsList';

export const getContacts = () => ({ type: GET_CONTACTS });
export const changeContactFormState = formData => ({ type: CHANGE_CONTACT_FORM_STATE, payload: formData });
export const createNewContact = newContact => ({ type: CREATE_NEW_CONTACT, payload: newContact });
export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
export const updateContact = updContact => ({ type: UPDATE_CONTACT, payload: updContact });
export const findContact = value => ({ type: FIND_CONTACT, payload: value });
