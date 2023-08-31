import React from 'react';
import { Link } from 'react-router-dom';

type ButtonStyleProps = {
    
};

const ButtonStyle:React.FC = () => {
    
    return (
        <div className="flex justify-center items-center h-48 w-full ">
        <Link to={"/createContact"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Contact
          </button>
        </Link>
      </div>
    )
}
export default ButtonStyle;