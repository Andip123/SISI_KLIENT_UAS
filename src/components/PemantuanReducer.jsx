import React from 'react';
import { useSelector } from 'react-redux';

const PemantauanComponentRedux = () => {
  const { data, loading, error } = useSelector((state) => state.pemantauan);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-[#db2329] text-[20px] font-[Quattrocento]">Data Pemantauan :</h1>
      <ul className="text-white text-[18px] font-[Quattrocento] mt-3">
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PemantauanComponentRedux;