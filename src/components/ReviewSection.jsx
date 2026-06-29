import Container from "./Container";
import { FaFacebook, FaStar, FaChevronRight } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const reviewsData = [
  {
    name: "Ahmed Youssef",
    time: "4 days ago",
    text: "Dean & Matt from Sunshine came out to provide an estimate for a water leak that occurred in my...",
  },
  {
    name: "Fatima Al-Sayed",
    time: "7 days ago",
    text: "When a leak caused by our freezer/ice maker caused serious damage to a section of our wood...",
  },
  {
    name: "Omar Hassan",
    time: "1 month ago",
    text: "I CANNOT RECOMMEND THIS COMPANY ENOUGH!!!! I showed both Brian and Dean where I had a...",
  },
  {
    name: "Layla Mahmoud",
    time: "3 months ago",
    text: "We had soot blown around the entire first floor of the house. We didn't know where to begin...",
  }
];

const ReviewSection = () => {
  return (
    <div className="bg-[#F6F6FF] pt-20 pb-20 min-h-[800px]">
      <Container>
        {/* Header Text */}
        <div className="flex justify-center items-center flex-col gap-3 mb-12">
          <h2 className="text-3xl text-body-primary font-semibold text-center">Reviews</h2>
          <h1 className="text-5xl font-bold text-center text-[#171A31]">Our Happy Charlotte Customers Review</h1>
        </div>

        {/* Review Widget Container */}
        <div className="bg-[#F8F9FB] rounded-xl overflow-hidden border border-gray-200 shadow-sm transition-shadow duration-500 hover:shadow-xl">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 bg-[#F1F3F6] px-5 py-4 gap-6 md:gap-10">
            <div className="flex items-center gap-2 font-bold text-gray-800 border-b-[3px] border-gray-800 pb-[18px] -mb-[18px] cursor-pointer">
              All Reviews <span className="font-semibold">5.0</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 font-semibold cursor-pointer hover:text-[#1877F2] transition-all hover:scale-105 duration-300">
              <FaFacebook className="text-[#1877F2] text-xl" /> Facebook
            </div>
            <div className="flex items-center gap-2 text-gray-600 font-semibold cursor-pointer hover:scale-105 transition-all duration-300">
              <FcGoogle className="text-xl" /> Google 5.0
            </div>
            <div className="flex items-center gap-2 text-gray-600 font-semibold cursor-pointer hover:text-[#115C6E] transition-all hover:scale-105 duration-300">
              <FaShieldHalved className="text-[#115C6E] text-xl" /> BBB
            </div>
          </div>

          {/* Overall Rating Section */}
          <div className="px-5 md:px-8 py-6 bg-[#F1F3F6] flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 gap-4">
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">Overall Rating</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[28px] font-bold text-gray-800">5.0</span>
                <div className="flex text-[#FFB800] text-xl gap-[2px]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="text-gray-400 text-sm ml-2">49 reviews</span>
              </div>
            </div>
            <button className="bg-[#2B7AFA] cursor-pointer hover:bg-[#1C63D4] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 whitespace-nowrap">
              Write a Review
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="p-5 md:p-8 bg-white relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviewsData.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-[#F3F4F8] p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-white border border-transparent hover:border-gray-200 cursor-pointer flex flex-col h-full"
                >
                  <h4 className="font-bold text-gray-800 text-[15px]">{review.name}</h4>
                  <div className="flex gap-[2px] text-[#FFB800] mt-2 mb-1 items-center">
                    <FaStar className="text-[14px]" /><FaStar className="text-[14px]" /><FaStar className="text-[14px]" /><FaStar className="text-[14px]" /><FaStar className="text-[14px]" />
                    <span className="text-[#9BA3AF] text-xs ml-2">{review.time}</span>
                  </div>
                  <p className="text-[#5B6373] text-[15px] mt-3 leading-relaxed flex-grow">
                    {review.text}
                  </p>
                  <a href="#" className="text-[#9BA3AF] text-[13px] hover:text-gray-600 mt-1 mb-4 inline-block transition-colors">
                    Read more
                  </a>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <FcGoogle className="text-[28px]" />
                    <span className="text-[11px] text-[#9BA3AF] leading-tight">
                      Posted on<br/>
                      <span className="text-[#2B7AFA] font-medium text-[12px]">Google</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow (Slider style) */}
            <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-400/70 hover:bg-gray-600 text-white p-3 rounded-full cursor-pointer transition-all duration-300 shadow-md active:scale-90 hover:shadow-lg z-10 hidden md:flex">
              <FaChevronRight className="text-sm" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewSection;
