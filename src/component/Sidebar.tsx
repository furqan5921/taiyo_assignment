import React, { useState } from "react";
import { AiOutlineHome, AiOutlineLineChart } from "react-icons/ai";
import { Link } from "react-router-dom";
type SidebarProps = {
  view: String;
  changeView: Function;
};

const Sidebar: React.FC<SidebarProps> = ({ view, changeView }) => {
  return (
    <div className="h-screen w-64 border border-indigo-800 ">
      <Link to={"/"}>
        <div
          className={`flex flex-col h-12 justify-center items-center w-full border border-solid border-indigo-800 ${
            view === "contact"
              ? "bg-white text-indigo-800"
              : "bg-indigo-800 text-white"
          } hover:cursor-pointer`}
          onClick={() => changeView("contact")}
        >
          <AiOutlineHome />
          <h1 className="text-xl">Contact</h1>
        </div>
      </Link>
      <Link to={"/graphAndChart"}>
        <div
          className={`flex flex-col h-12 justify-center items-center w-full border border-solid border-indigo-800 ${
            view == "graph"
              ? "bg-white text-indigo-800"
              : "bg-indigo-800 text-white"
          } hover:cursor-pointer`}
          onClick={() => changeView("graph")}
        >
          <AiOutlineLineChart />
          <h1 className="text-xl">Graphs & Chart</h1>
        </div>
      </Link>
    </div>
  );
};
export default Sidebar;
