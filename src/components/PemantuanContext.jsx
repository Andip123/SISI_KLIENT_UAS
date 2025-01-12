import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";

const PemantauanComponentContext = () => {
  const { pemantauanData } = useContext(DataContext);

  return (
    <div>
      <h1 className="text-[#db2329] text-[20px] font-[Quattrocento]">
        Data Pemantauan :
      </h1>
      <ul className="text-white text-[18px] font-[Quattrocento] mt-3">
        {pemantauanData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PemantauanComponentContext;
