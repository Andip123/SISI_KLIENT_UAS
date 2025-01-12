import { forwardRef } from "react";

const Inputt = forwardRef((props, ref) => {
  const { type, name, placholder } = props
  return (
    <input
      type={type}
      placeholder={placholder}
      className="flex flex-col w-[250px] h-[30px] bg-[#0d1117] rounded-[5px] p-2 mt-2 text-white" 
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Inputt;