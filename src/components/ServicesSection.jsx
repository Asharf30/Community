import Container from "./Container";
import water from "../assets/Landing Page Template (Community) (1)/Rectangle 4411.png";
import Fire from "../assets/Landing Page Template (Community) (1)/Rectangle 4412.png";
import Junk from "../assets/Landing Page Template (Community) (1)/Rectangle 4413.png";
import Mold from "../assets/Landing Page Template (Community) (1)/Rectangle 4414.png";

const ServicesSection = () => {
  return (
    <Container>
      <div className="pt-20 pb-20 min-[1050px]:pb-40">
        <h1 className="text-[50px] font-bold  text-center ">
          Learn About Our Restoration Services
        </h1>
        <div className="flex items-center justify-center gap-1 mt-5">
          <span className="h-[1px] bg-black w-[220px]"></span>

          <p className="text-[20px]  font-bold text-[#4A4E6D] whitespace-nowrap">
            Sub Header Text Here
          </p>

          <span className="h-[1px] bg-black w-[220px]"></span>
        </div>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-10 ">
          <div className="bg-[#E5F9FF] p-10 flex flex-col items-center gap-5 rounded-tl-[57px] rounded-tr-[57px] rounded-bl-[57px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <img src={water} alt="" />
            <h2 className="text-black text-[25px] font-bold ">
              Water Damage Restoration
            </h2>
            <button className="bg-[#42BFE4] py-6 px-10 rounded-full font-bold text-2xl text-white mt-3 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
              View Details
            </button>
          </div>
          <div className="bg-[#FFEDDD] p-10 flex flex-col items-center gap-5 rounded-tl-[57px] rounded-tr-[57px] rounded-br-[57px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <img src={Fire} alt="" />
            <h2 className="text-black text-[25px] font-bold ">
              Fire Damage Restoration
            </h2>
            <button className="bg-[#D37C2E] py-6 px-10 rounded-full font-bold text-2xl text-white mt-3 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
              View Details
            </button>
          </div>
          <div className="bg-[#F0DDFF] p-10 flex flex-col items-center gap-5 rounded-tl-[57px] rounded-br-[57px] rounded-bl-[57px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <img src={Junk} alt="" />
            <h2 className="text-black text-[25px] font-bold ">Junk Removal</h2>
            <button className="bg-[#8B37CD] py-6 px-10 rounded-full font-bold text-2xl text-white mt-3 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
              View Details
            </button>
          </div>
          <div className="bg-[#E8FFDD] p-10 flex flex-col items-center gap-5 rounded-bl-[57px] rounded-tr-[57px] rounded-br-[57px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <img src={Mold} alt="" />
            <h2 className="text-black text-[25px] font-bold ">
              Mold Remediation
            </h2>
            <button className="bg-[#78CA51] py-6 px-10 rounded-full font-bold text-2xl text-white mt-3 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
              View Details
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#42BFE4] py-6 px-7 rounded-full font-bold text-4xl text-white mt-3 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
            More Services
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
