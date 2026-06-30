import Container from "./Container";
import { FaFacebook, FaStar, FaChevronRight } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "user_reviews";

const HARDCODED_REVIEWS = [
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
];

const ReviewSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState(HARDCODED_REVIEWS);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    text: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const savedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedReviews) {
      const parsed = JSON.parse(savedReviews);
      setReviews([...HARDCODED_REVIEWS, ...parsed]);
    }
  }, []);

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.text.trim()) {
      setFormError("Please fill in all fields.");
      return;
    }
    if (formData.text.trim().length < 10) {
      setFormError("Review text must be at least 10 characters long.");
      return;
    }
    const newReview = {
      name: formData.name.trim(),
      time: "Just now",
      rating: formData.rating,
      text: formData.text.trim(),
      isUserReview: true, // علشان نميزه بـ badge
    };

    // ③ احفظ في localStorage (بس الريفيوهات اللي اليوزر كتبها)
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    const existing = saved ? JSON.parse(saved) : [];
    const updated = [newReview, ...existing];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

    // ④ حدّث الـ state عشان يظهر فوراً
    setReviews([...HARDCODED_REVIEWS, ...updated]);

    // ⑤ Reset وأقفل الـ Modal
    setFormData({ name: "", rating: 5, text: "" });
    setFormError("");
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setFormData({ name: "", rating: 5, text: "" });
    setFormError("");
  };

  return (
    <div className="bg-[#F6F6FF] pt-20 pb-20 min-h-[800px]">
      <Container>
        {/* Header */}
        <div className="flex justify-center items-center flex-col gap-3 mb-12">
          <h2 className="text-3xl text-body-primary font-semibold text-center">
            Reviews
          </h2>
          <h1 className="text-5xl font-bold text-center text-[#171A31]">
            Our Happy Charlotte Customers Review
          </h1>
        </div>

        {/* Review Widget */}
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

          {/* Overall Rating */}
          <div className="px-5 md:px-8 py-6 bg-[#F1F3F6] flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 gap-4">
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">
                Overall Rating
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[28px] font-bold text-gray-800">5.0</span>
                <div className="flex text-[#FFB800] text-xl gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-gray-400 text-sm ml-2">
                  {reviews.length} reviews
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2B7AFA] cursor-pointer hover:bg-[#1C63D4] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              Write a Review
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="p-5 md:p-8 bg-white relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-[#F3F4F8] p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-white border border-transparent hover:border-gray-200 cursor-pointer flex flex-col h-full"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-800 text-[15px]">
                      {review.name}
                    </h4>
                    {review.isUserReview && (
                      <span className="text-[10px] bg-primary text-white px-2 py-[2px] rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <div className="flex gap-[2px] text-[#FFB800] mt-2 mb-1 items-center">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="text-[14px]" />
                    ))}
                    <span className="text-[#9BA3AF] text-xs ml-2">
                      {review.time}
                    </span>
                  </div>
                  <p className="text-[#5B6373] text-[15px] mt-3 leading-relaxed flex-grow">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-2 mt-auto pt-4">
                    <FcGoogle className="text-[28px]" />
                    <span className="text-[11px] text-[#9BA3AF] leading-tight">
                      Posted on
                      <br />
                      <span className="text-[#2B7AFA] font-medium text-[12px]">
                        Google
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-400/70 hover:bg-gray-600 text-white p-3 rounded-full cursor-pointer transition-all duration-300 shadow-md active:scale-90 hover:shadow-lg z-10 hidden md:flex">
              <FaChevronRight className="text-sm" />
            </div>
          </div>
        </div>
      </Container>

      {/* ===== MODAL ===== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={handleClose} // الضغط على الخلفية يقفل
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-[500px] p-8 relative animate-[fadeInUp_0.3s_ease]"
            onClick={(e) => e.stopPropagation()} // منع الإغلاق لو ضغطت جوا
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl transition-colors duration-200 cursor-pointer"
            >
              <IoCloseOutline />
            </button>

            <h2 className="text-2xl font-bold text-heading mb-1">
              Write a Review
            </h2>
            <p className="text-body-primary text-sm mb-6">
              Share your experience with us!
            </p>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Asharf Osama"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-body-primary placeholder:text-gray-400 focus:outline-none focus:border-primary focus:shadow-md transition-all duration-300"
              />
            </div>

            {/* Rating Stars */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`text-3xl transition-all duration-200 hover:scale-125 cursor-pointer ${
                      star <= formData.rating
                        ? "text-[#FFB800]"
                        : "text-gray-300"
                    }`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your experience..."
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-body-primary placeholder:text-gray-400 focus:outline-none focus:border-primary focus:shadow-md transition-all duration-300 resize-none"
              />
            </div>

            {/* Error */}
            {formError && (
              <p className="text-red-500 text-sm mb-3">{formError}</p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#1a7acc] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
