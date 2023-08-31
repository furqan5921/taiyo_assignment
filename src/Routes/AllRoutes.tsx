import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import GraphAndChart from "../pages/GraphAndChart";
import CreateContact from "../pages/CreateContact";

type AllRoutesProps = {};

const AllRoutes: React.FC<AllRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/createContact" element={<CreateContact />} />
      <Route path="/graphAndChart" element={<GraphAndChart />} />
    </Routes>
  );
};
export default AllRoutes;
