import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [penyuluhanData, setPenyuluhanData] = useState([
    { id: 1, name: "Penyuluhan Bencana Alam" },
    { id: 2, name: "Penyuluhan Banjir" },
    { id: 3, name: "Penyuluhan Mitigasi Bencana Banjir di Sekolah" },
    { id: 4, name: "Penyuluhan di Komunitas Terdampak Banjir" }
  ]);

  const [pemantauanData, setPemantauanData] = useState([
    { id: 1, name: "Pemantauan Banjir Semarang" },
    { id: 2, name: "Pemantauan Banjir Jakarta" },
    { id: 3, name: "Pemantauan Banjir Bandung" },
    { id: 4, name: "Pemantauan Banjir dan Bencana alam Surabaya" },
    { id: 5, name: "Pemantauan Cuaca dan Iklim" }
  ]);

  return (
    <DataContext.Provider value={{ penyuluhanData, pemantauanData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };