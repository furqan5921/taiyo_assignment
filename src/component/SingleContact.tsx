import React, { useState } from "react";
import { Contact } from "../redux/types/contactType";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions/contactActions";
import EditModal from "./EditModal";

type SinlgeContactProps = {};

const SinlgeContact: React.FC<Contact> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center flex-col gap-4 text-center shadow-xl bg-indigo-800 text-white p-4 ">
        <p className="sm:text-xs">First Name: {props.firstname}</p>
        <p className="sm:text-xs">Last Name: {props.lastname}</p>
        <p className="sm:text-xs">Status: {props.status ? "Active" : "Non-Active"}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteContact(props.id))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Delete
        </button>
      </div>
      {isOpen && (
        <EditModal initialUserInfo={props} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};
export default SinlgeContact;
