import React, { ChangeEvent, useState } from "react";
import { Contact } from "../redux/types/contactType";
import { useDispatch } from "react-redux";
import { editContact } from "../redux/actions/contactActions";

type EditModalProps = {
  initialUserInfo: Contact;
  onClose: () => void;
};

const EditModal: React.FC<EditModalProps> = ({ initialUserInfo, onClose }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  console.log("🚀 ~ file: EditModal.tsx:11 ~ userInfo:", userInfo);

  const handleUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: checked,
    });
  };

  const handleSubmit = (): void => {
    dispatch(editContact(userInfo));
    onClose();
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Edit Contact</h3>
            <button className="bg-transparent border-0 text-black float-right">
              <span
                onClick={onClose}
                className="text-black opacity-7 h-7 w-6 text-xl block bg-gray-400 py-0 rounded-full"
              >
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
            >
              <label className="block text-black text-sm font-bold mb-1">
                First Name
              </label>
              <input
                value={userInfo.firstname}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                name="firstname"
                onChange={handleUserInfo}
              />
              <label className="block text-black text-sm font-bold mb-1">
                Last Name
              </label>
              <input
                value={userInfo.lastname}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                name="lastname"
                onChange={handleUserInfo}
              />
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
                    checked={userInfo.status}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Active
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={!userInfo.status}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Inactive
                </label>
              </div>
              <div className="flex items-center justify-end mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
