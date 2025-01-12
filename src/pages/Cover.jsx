import React, { useEffect, useRef } from "react";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";
import location from "../assets/photos/location.png";
import mitra from "../assets/photos/mitra.png";
import riset from "../assets/photos/riset.png";

const Cover = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    window.location.href = "/login";
}
  return (
    <>
      <div className="flex flex-col h-[1414px] bg-[#123332]">
        <div className="bg-[url('/src/assets/photos/dampak.png')] w-full h-[526px] bg-cover">
          <p className="text-[#FED8BD] ml-[264px] mr-[261px] mt-[70px] text-[60px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
            Pusat Pemantuan & Penyuluhan Bencana Alam 
          </p>
          <p className="text-white ml-[264px] mr-[291px] mt-[27px] inline-block font-[Quattrocento] text-[20px]">
            Tempat terpercaya untuk memperoleh informasi akurat dan terbaru
            tentang berbagai jenis bencana alam serta panduan untuk mitigasi dan
            kesiapsiagaan.
          </p>
          <div className="flex space-x-90">
            <Button
              classname="w-[230px] h-[53px] bg-[#EF9C82] rounded-[7px] ml-[264px] mr-[10px] mt-[24px]"
              onClick={handleNext}
            >
              <p className="text-[#123332] font-[Quattrocento] text-[21px] justify-center items-center">
                Pelajari Lebih Lanjut
              </p>
            </Button>
            <Button
              classname="w-[170px] h-[53px] bg-[#000000] mt-[24px] rounded-[7px] outline-[#EF9C82] outline"
              onClick={scrollToFooter}
            >
              <p className="text-[#EF9C82] font-[Quttrocento] justify-center items-center text-[21px]">
                Hubungi Kami
              </p>
            </Button>
          </div>
        </div>
        <div>
          <p className="flex flex-col text-[50px] text-[#FFD9BE] font-[Quattrocento] ml-[264px] mr-[285px] mt-[80px]">
            Tentang Kami
          </p>
          <p className="text-white text-[20px] font-[Quattrocento] mt-[35px] ml-[264px] mr-[285px]">
            Kami adalah organisasi yang berdedikasi untuk mempersiapkan
            masyarakat dalam menghadapi bencana alam. Dengan keahlian dan
            pengalaman kami, kami membantu masyarakat meningkatkan kesiapsiagaan
            dan ketahanan
          </p>
        </div>
        <div className="flex space-x-90">
          <div>
            <img
              src={location}
              alt="location"
              className="h-[48px] w-[48px] ml-[200px] mt-[29px]"
            />
            <p className="text-[#FFD9BE] ml-[200px] mt-[15px] mr-[40px] font-[Quattrocento] text-[25px] tracking-wide ">
              Tersebar di Seluruh Indonesia
            </p>
            <p className="text-white ml-[200px]  mt-[15px] mr-[40px] font-[Quattrocento] text-[18px] tracking-wide">
              Kami hadir di berbagai wilayah untuk menjangkau masyarakat di
              seluruh Indonesia.
            </p>
          </div>
          <div>
            <img
              src={mitra}
              alt="mitra"
              className="mt-[29px] h-[48px] w-[48px] ml-[20px]"
            />
            <p className="text-[#FFD9BE] ml-[20px] mt-[15px] pr-[90px] font-[Quattrocento] text-[25px] tracking-wide">
              Mitra Terpercaya
            </p>
            <p className="text-white ml-[20px]  mt-[15px] pr-[440px] font-[Quattrocento] text-[18px] tracking-wide">
              Bekerja sama dengan pemerintah, LSM, dan komunitas lokal untuk
              mencapai dampak yang lebih besar.
            </p>
          </div>
          <div>
            <img
              src={riset}
              alt="riset"
              className="mr-[410px] mt-[29px] ml-[-380px] h-[48px] w-[50px] "
            />
            <p className="text-[#FFD9BE]  mt-[15px] mr-[200px] ml-[-380px] font-[Quattrocento] text-[25px] tracking-wide">
              Berbasis Riset
            </p>
            <p className="text-white w-[300px] ml-[-380px] mt-[15px] font-[Quattrocento] text-[18px] tracking-wide">
              Menggunakan data dan analisis terkini untuk memberikan informasi
              yang akurat dan terpercaya.
            </p>
          </div>
        </div>
        <Footer ref={footerRef} />
      </div>
    </>
  );
};

export default Cover;
