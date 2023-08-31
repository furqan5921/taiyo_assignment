import { Contact } from "../types/contactType";


import { ADD_CONTACT,  ContactActionTypes,  DELETE_CONTACT, EDIT_CONTACT } from "../types/contactActionTypes";
export interface ContactState {
  contacts: Contact[];
}


const initialState: ContactState = {
  contacts: [],
};

const contactReducer = (
  state = initialState,
  action: ContactActionTypes
): ContactState => {
 
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
