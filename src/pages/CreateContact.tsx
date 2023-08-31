import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/contactActions";
import { Contact } from "../redux/types/contactType";
import { useNavigate } from "react-router-dom";

const CreateContact: React.FC = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [status, setStatus] = useState(true);

  const dispatch = useDispatch();

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact: Contact = {
      id: String(new Date().getTime()),
      firstname,
      lastname,
      status,
    };
    dispatch(addContact(newContact));
    setFirstName("");
    setLastName("");
    setStatus(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen w-screen bg-gray-200">
      <div className="py-12 sm:max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Contact</h1>
        <form onSubmit={handleAddContact}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter First Name"
              value={firstname}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 font-bold mb-2"
            >
              Status
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status}
                  onChange={() => setStatus(true)}
                  className="mr-2"
                />
                Active
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={!status}
                  onChange={() => setStatus(false)}
                  className="mr-2"
                />
                Inactive
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
