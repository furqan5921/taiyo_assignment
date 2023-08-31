import {
  ADD_CONTACT,
  ContactActionTypes,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "../types/contactActionTypes";
import { Contact } from "../types/contactType";



export const addContact = (contact: Contact): ContactActionTypes => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const editContact = (contact: Contact): ContactActionTypes => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const deleteContact = (id: string): ContactActionTypes => ({
  type: DELETE_CONTACT,
  payload: id,
});
