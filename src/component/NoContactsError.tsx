import React from "react";
import { VscError } from "react-icons/vsc";
type NoContactsErrorProps = {};

const NoContactsError: React.FC<NoContactsErrorProps> = () => {
  return (
    <div className="text-red-700  h-full w-full flex gap-4 justify-center items-center">
      <div className="text-4xl">
        <VscError />
      </div>
      <h1 className=" text-3xl">
        No Contact Found please add contact from create contact button{" "}
      </h1>
    </div>
  );
};
export default NoContactsError;
