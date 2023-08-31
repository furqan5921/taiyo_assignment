import { Contact } from "./contactType";

export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

interface AddContactAction {
    type: typeof ADD_CONTACT;
    payload: Contact;
  }
  
  interface EditContactAction {
    type: typeof EDIT_CONTACT;
    payload: Contact;
  }
  
  interface DeleteContactAction {
    type: typeof DELETE_CONTACT;
    payload: string;
  }
  
  export type ContactActionTypes =
    | AddContactAction
    | EditContactAction
    | DeleteContactAction;