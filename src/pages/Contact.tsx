import React from "react";
import { useSelector } from "react-redux";
import { ContactState } from "../redux/reducer/contactReducer";
import { Link } from "react-router-dom";
import ButtonStyle from "../component/ButtonStyle";
import NoContactsError from "../component/NoContactsError";
import MapContact from "../component/MapContact";
type ContactProps = {};

const Contact: React.FC = () => {
  const { contacts } = useSelector((s: { contact: ContactState }) => s.contact);

  return (
    <div className="w-full  h-screen border border-solid border-red-500 overflow-auto ">
      <ButtonStyle />

      {contacts.length === 0 ? (
        <NoContactsError />
      ) : (
        <MapContact contacts={contacts} />
      )}
    </div>
  );
};
export default Contact;
