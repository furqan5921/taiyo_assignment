import React from "react";

type CasesInfoProps = {
  title: string;
  cases: string;
  total: string;
  onClick: () => void;
};

const CasesInfo: React.FC<CasesInfoProps> = ({
  title,
  cases,
  total,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex-1 shadow-lg text-center p-2 cursor-pointer "
    >
      <div>
        <h1 className="text-secondary">{title}</h1>
        <h2 className="text-red-700 font-semibold text-3xl mb-2">{cases}</h2>
        <h1 className="text-gray-600 font-bold text-xs mt-4">{total} Total</h1>
      </div>
    </div>
  );
};
export default CasesInfo;
