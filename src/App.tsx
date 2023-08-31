import Sidebar from "./component/Sidebar";
import "./index.css";
import { useState } from "react";
import Contact from "./pages/Contact";
import GraphAndChart from "./pages/GraphAndChart";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [currentView, setCurrentView] = useState<string>("contact");
  const handleView = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div className="flex w-full">
      <Sidebar view={currentView} changeView={handleView} />
      <AllRoutes />
    </div>
  );
}

export default App;
