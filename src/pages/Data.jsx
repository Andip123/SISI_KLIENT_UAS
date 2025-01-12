import React from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "../components/context/DataContext";
import PenyuluhanComponentContext from "../components/PenyuluhanContext";
import PemantauanComponentContext from "../components/PemantuanContext";

const Data = () => {
  return ReactDOM.render(
    <DataProvider>
      <div className="flex justify-center items-center h-screen w-screen bg-[#123332] space-x-56">
        <PenyuluhanComponentContext />
        <PemantauanComponentContext />
      </div>
    </DataProvider>,
    document.getElementById("root")
  );
};

export default Data;
