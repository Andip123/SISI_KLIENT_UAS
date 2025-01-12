import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";

const PenyuluhanComponentContext = () => {
  const { penyuluhanData } = useContext(DataContext);

  return (
    <div>
      <h1 className="text-[#db2329] text-[20px] font-[Quattrocento] ">
        Data Penyuluhan :
      </h1>
      <ul className="text-white text-[18px] font-[Quattrocento] mt-3">
        {penyuluhanData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PenyuluhanComponentContext;
