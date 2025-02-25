import { apple, google, bill, bill2, bill3, bill4, bill5 } from "../assets";
import styles, { layout } from "../style";
import {
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaStore
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Billing = () => (
  <section
    id="EKONOMI DIGITAL"
    className={`${layout.sectionReverse} relative overflow-hidden`}
  >
    {/* Background Gradient */}
    <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#3FA3CE] rounded-full opacity-10 blur-3xl -z-10"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF8B8B] rounded-full opacity-10 blur-3xl -z-10"></div>

    {/* Bagian Kiri - Ilustrasi */}
    <div className="relative grid grid-cols-2 gap-4 p-6 w-full max-w-[500px] lg:max-w-[600px]">
      {/* 2 Gambar di Kiri */}
      <div className="flex flex-col gap-4">
        <img
          src={bill}
          alt="billing"
          className="w-full max-w-[300px] h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-2"
        />
        <img
          src={bill2}
          alt="billing2"
          className="w-full max-w-[300px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-rotate-2"
        />
      </div>

      {/* 3 Gambar di Kanan */}
      <div className="flex flex-col gap-4">
        <img
          src={bill3}
          alt="billing3"
          className="w-full max-w-[200px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-1"
        />
        <img
          src={bill4}
          alt="billing4"
          className="w-full max-w-[200px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-rotate-1"
        />
        <img
          src={bill5}
          alt="billing5"
          className="w-full max-w-[150px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-2"
        />
      </div>
    </div>

    {/* Bagian Kanan - Konten */}
    <div
      className={`${layout.sectionInfo} p-8 bg-[#F4F4F4] rounded-xl shadow-lg`}
    >
      <h2 className="text-[36px] font-extrabold text-[#145C75] leading-[44px] mb-4">
        💰 EKONOMI DIGITAL <br />
        <span className="font-poppins font-semibold ss:text-[16px] text-[14px] text-[#66B2D6] ss:leading-[24px] leading-[22px] w-full mt-1 flex items-center">
          <FaStore className="text-[#66B2D6] text-[20px] mr-2" />
          Dorong UMKM dan Produk Lokal dengan Teknologi
          <FaChartLine className="text-[#66B2D6] text-[20px] ml-2" />
        </span>
      </h2>
      <p className="text-[18px] text-[#525252] leading-[28px]">
        Ekonomi desa memiliki potensi besar yang sering kali belum dimanfaatkan.
        Dengan teknologi digital, masyarakat dapat memperluas pasar, mengelola
        usaha dengan efisien, dan meningkatkan daya saing produk lokal.
      </p>

      {/* 4 Manfaat Ekonomi Digital */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center space-x-3">
          <FaChartLine className="text-[#BF5F5F] text-2xl" />
          <span className="text-[#3E3E3E] font-medium">
            Memasarkan Produk Lokal
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FaShoppingCart className="text-[#3FA3CE] text-2xl" />
          <span className="text-[#3E3E3E] font-medium">
            Efisiensi Usaha Digital
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <MdOutlineBusinessCenter className="text-[#C06C6C] text-2xl" />
          <span className="text-[#3E3E3E] font-medium">
            Peluang Usaha Digital
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FaUsers className="text-[#66B2D6] text-2xl" />
          <span className="text-[#3E3E3E] font-medium">
            Meningkatkan Kesejahteraan
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-[#BF5F5F] hover:bg-[#FF9999] text-white shadow-lg px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
        🚀 Mulai Sekarang
      </button>
    </div>
  </section>
);

export default Billing;
