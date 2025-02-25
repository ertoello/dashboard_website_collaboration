import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`
      ${styles.flexCenter} w-[160px] h-[160px] rounded-full 
      bg-gradient-to-b from-[#66B2D6] to-[#145C75] 
      shadow-[10px_10px_20px_rgba(1,1,1,0.3)] 
      transition-all duration-200 ease-in-out 
      transform hover:scale-105 active:scale-90 active:shadow-inner cursor-pointer
    `}
  >
    <div
      className={`
        ${styles.flexCenter} flex-col w-[95%] h-[95%] rounded-full 
        bg-gradient-to-b from-[#3FA3CE] to-[#2B7A98]
        shadow-inner transition-all duration-200
      `}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-semibold text-[16px] leading-[20px] text-[#FFFFFF]">
          <span className="text-[#FFFFFF]">Jelajahi</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[18px] h-[18px] object-contain ml-1"
        />
      </div>

      <p className="font-poppins font-semibold text-[16px] leading-[20px] text-[#FFFFFF]">
        <span className="text-[#FFFFFF]">Solusi Digital</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
