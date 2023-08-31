import React, { useState } from "react";
import { Contact } from "../redux/types/contactType";
import EditModal from "./EditModal";
import SingleContact from "./SingleContact";

type MapContactProps = {
  contacts: Contact[];
};

const MapContact: React.FC<MapContactProps> = ({ contacts }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center items-center  xl:grid-cols-4 ml-8 gap-4">
        {contacts.map((contact) => (
          <SingleContact {...contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
};
export default MapContact;
