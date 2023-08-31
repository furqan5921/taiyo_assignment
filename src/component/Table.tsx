import React from "react";

type TableProps = {
  countries: any;
};

const Table: React.FC<TableProps> = ({ countries }) => {
  return (
    <div className="h-96 mt-6 overflow-y-scroll text-gray-700">
      {countries.map(({ country, cases }: any) => (
        <tr className="flex justify-between">
          <td className="p-2">{country}</td>
          <td className=" bg-gray-200">
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
export default Table;
