import { forwardRef } from "react";

const Footer = forwardRef((props,ref) => {
  return (
    <footer
      ref={ref}>
      <div className="flex bg-[url('/src/assets/photos/akhir.png')] w-full h-[191px] bg-cover mt-[90px]">

        <div className="bg-[#485e5e] w-[250px] h-[100px] ml-[350px] mt-[42px] rounded-[200px]"> 
            <p className="flex flex-col text-[#FED8BD] font-[Quattrocento] text-[20px] mx-[48px] mt-[23px] justify-center items-center"> 
                Andi Prabandaru
            </p>
            <p className="flex flex-col text-[#FFFFFF] font-[Quattrocento] text-[20px] mt-[7px] ml-[7px] justify-center items-center">
              A11.2021.13907
            </p>
        </div>
        <div className="bg-[#485e5e] w-[250px] h-[100px] ml-[264px] mt-[42px] rounded-[200px]">
            <p className="flex flex-col text-[#FED8BD] font-[Quattrocento] text-[20px] mx-[48px] mt-[23px] justify-center items-center"> 
                Contact Person
            </p>
            <p className="flex flex-col text-[#FFFFFF] font-[Quattrocento] text-[20px] mt-[7px] ml-[7px] justify-center items-center">
              08237278373
            </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
