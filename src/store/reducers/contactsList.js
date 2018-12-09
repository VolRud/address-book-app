import {
    GET_CONTACTS,
    CHANGE_CONTACT_FORM_STATE,
    CREATE_NEW_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FIND_CONTACT,
    SUCCESS, 
    FAIL,
} from '../constants/contactsList';
 
const initialState = {
   contacts: [],
   contactsLoaded: false,
   findContact: '',
   formData: {
       type: null,
       id: '',
       name: '',
       email: '',
    },
};

const contactsList = (state = initialState, action) => {
    const { payload, type, } = action;
    switch (type) {
        case GET_CONTACTS+ SUCCESS:
            return { 
                ...state,
                contacts: payload,
                contactsLoaded: true,
            }
        case CREATE_NEW_CONTACT+ SUCCESS:
        return { 
            ...state,
            contacts: [...state.contacts, payload]
        }
        case DELETE_CONTACT + SUCCESS:
        const delContact = state.contacts.filter(contact=>contact.id!==payload)
        return { 
            ...state,
            contacts: delContact,
        }
        case UPDATE_CONTACT+ SUCCESS:
        const updContact = state.contacts.map(contact=>{
            if(contact.id!==payload.id) return contact;
            return payload;
        })
        return { 
            ...state,
            contacts: updContact,
        }
        case FIND_CONTACT:
            return {
                ...state,
                findContact: payload.toLowerCase(),
            }
        case CHANGE_CONTACT_FORM_STATE:
            return {
                ...state,
                formData: payload,
            }
        case DELETE_CONTACT + FAIL:
        case GET_CONTACTS + FAIL:
        case CREATE_NEW_CONTACT + FAIL:
        case UPDATE_CONTACT+ FAIL:
            console.log('ERROR', payload);
            break;
        default:
        return {
            ...state
        }
    }

    return state;
};

export default contactsList;