import Button from "../components/Button";
import Footer from "../components/Footer.jsx";
import penyebab from "../assets/photos/PenyebabBanjir.jpg";
import sawah from "../assets/photos/latar.png";

const homePage = () => {
  const handleDataContext = () => {
    window.location.href = "/data";
  };

  const handleDataRedux = () => {
    window.location.href = "/dataredux";
  };

  const handleLaporan = () => {
    window.location.href = "/laporan";
  };

  return (
    <div className="flex flex-col h-[2300px] w-full bg-[#3d5c5b] ">
      <div>
        <img src={sawah} alt="sawah" className="w-full h-[230px]" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#FED8BD] ml-[264px] mr-[261px] mt-[70px] text-[50px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
          Definisi Bencana Alam
        </p>
        <p className="text-white ml-[264px] mr-[250px] mt-[30px] inline-block font-[Quattrocento] text-[18px]">
          Bencana alam adalah fenomena alam yang terjadi secara tiba-tiba dan
          tak terduga, seperti gempa bumi, banjir, gunung meletus, dan
          lain-lain. Bencana alam dapat mengancam keselamatan, menimbulkan
          korban jiwa, dan merusak harta benda serta lingkungan. Ketika terjadi
          bencana alam, masyarakat berada dalam keadaan darurat dan membutuhkan
          bantuan segera.
        </p>
      </div>
      <div className="flex flex-col bg-[#5a8a88] h-[700px] mt-[90px] justify-center">
        <p className="text-[#FED8BD] ml-[264px] mr-[261px] text-[40px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
          Definisi Bencana Banjir
        </p>
        <p className="text-white ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[18px]">
          Bencana banjir adalah peristiwa alam yang terjadi ketika daratan
          terendam oleh air dalam jumlah besar. Banjir dapat terjadi karena
          volume air di suatu badan air, seperti sungai atau danau, meluap atau
          melimpah dari bendungan
        </p>
      </div>
      <div className="flex flex-col bg-[url('/src/assets/photos/tengah.jpg')] w-full h-[700px] justify-center ">
      <p className="text-[#FED8BD] ml-[264px] mr-[261px] text-[40px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
          Cara Menanggulangi Bencana Banjir
        </p>
        <p className="text-white ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[18px]">
          Bencana banjir bisa di tanggulangi dengan kesadaran pada masyarakat itu sendiri,
          contohnya membuang sampah pada tempatnya, Memperbanyak lahan penyerapan air,
          Tidak membangun perumahan di tepi sungai, dan tidak menebang pohon sembarangan.
          Dengan kesadaran masyarakat akan lingkungan akan mengurangi risiko terjadinya 
          banjir.
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-[#FED8BD] ml-[264px] mt-[70px] text-[40px] inline-block font-[Quattrocento] font-extralight tracking-wide leading-tight ">
            Penyebab Banjir
          </p>
          <div className="flex flex-col">
            <p className="text-[#FED8BD] ml-[264px] mr-[250px] mt-[50px] inline-block font-[Quattrocento] text-[20px]">
              Faktor Alam
            </p>
            <p className="text-white ml-[264px] mr-[150px] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Curah hujan yang tinggi, Letak daratan yang rendah, Pasang air
              laut, dan Tsunami.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FED8BD] ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[20px]">
              Aktivitas Manusia
            </p>
            <p className="text-white ml-[264px] mr-[150px] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Membuang sampah sembarangan, Penembangan hutan secara liar, dan
              Penggundulan hutan.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FED8BD] ml-[264px] mr-[250px] mt-[27px] inline-block font-[Quattrocento] text-[20px]">
              Interaksi Manusia-Alam
            </p>
            <p className="text-white ml-[264px] mr-[150px] mt-[10px] inline-block font-[Quattrocento] text-[19px]">
              Kombinasi antara faktor alam dan aktivitas manusia
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={penyebab}
            alt="Penyebab"
            className="w-[370px] h-[550px] mr-[230px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[50px] space-x-20">
        <Button
          classname="w-[170px] h-[53px] bg-[#EF9C82] rounded-[200px]"
          onClick={handleDataContext}
        >
          <p className="text-[#123332] font-[Quattrocento] text-[21px] justify-center items-center">
            Data Context
          </p>
        </Button>
        <Button
          classname="w-[170px] h-[53px] bg-[#EF9C82] rounded-[200px]"
          onClick={handleDataRedux}
        >
          <p className="text-[#123332] font-[Quattrocento] text-[21px] justify-center items-center">
            Data Redux
          </p>
        </Button>
        <Button
          classname="w-[170px] h-[53px] bg-[#EF9C82] rounded-[200px]"
          onClick={handleLaporan}
        >
          <p className="text-[#123332] font-[Quattrocento] text-[21px] justify-center items-center">
            Laporan
          </p>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default homePage;
