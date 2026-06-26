import React from "react";
import Container from "./Container";
import man from "../assets/Landing Page Template (Community) (1)/Rectangle 24.png";
import home3 from "../assets/home 3.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const CONTACT_SCHEMA = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.string().email("Please enter a valid email"),

  phone: z
    .string()
    .min(7, "Phone is required")
    .regex(/^\+?[0-9\s-]+$/, "Phone must contain numbers only"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});
const ContactSection = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CONTACT_SCHEMA),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Valid form data:", data);

    setSuccessMessage("Message sent successfully!");

    reset();

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const onError = () => {
    setSuccessMessage("");
  };

  return (
    <div className="min-h-[1250px] bg-[#F6F6FF]">
      <Container>
        <div className="pt-20 ">
          <h1 className="text-[50px] font-bold  text-center">
            24/7 Charlotte Water Damage, Fire <br />
            Damage, Mold Remediation, and Biohazard Services
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-1 mt-10">
            <span className="h-[1px] bg-[#000000] w-1/4 md:flex-1 hidden md:block"></span>

            <p className="text-[16px] md:text-[20px] font-bold text-[#4A4E6D] whitespace-normal md:whitespace-nowrap text-center">
              Restoring Your Home and Life Back to its pre-disaster state.
            </p>

            <span className="h-[1px] bg-[#000000] w-1/4 md:flex-1 hidden md:block"></span>
          </div>
        </div>
        <div className="flex flex-col min-[1050px]:flex-row justify-between items-center min-[1050px]:items-start gap-10">
          <div className="mt-10 min-[1050px]:mt-20 flex flex-col items-center min-[1050px]:items-start">
            <img src={man} alt="" className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-500" />
            <p className="text-[20px] font-bold text-justify text-[#4A4E6D] leading-relaxed max-w-[500px] mt-10">
              There are many places in your Aurora home where water damage can
              take place, from your basement to the attic. Water damage can
              occur from frozen pipes, frozen sprinkler lines, rusted or
              oxidized pipes, toilet overflow, toilet leaks, the water heater,
              refrigerator, dishwasher overflow or washing machine, hardwood
              floor water damage, broken pipe water damage.{" "}
            </p>
          </div>
          <div className="bg-secondary mt-10 min-[1050px]:mt-20 max-h-[700px] rounded-2xl w-full max-w-[490px] justify-center items-center shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,20,127,0.4)] hover:-translate-y-2">
            <div>
              <h1 className="text-[30px] text-white font-bold text-center mt-10">
                Contact Us
              </h1>
              <p className="text-[20px] text-white font-bold text-center mt-3">
                Available 24 Hours, 7 Days a Week
              </p>
            </div>
            <div>
              <form
                className="flex flex-col gap-5 mt-10 px-10 pb-10 rounded-[10px]"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                <div className="group">
                  <input
                    type="text"
                    placeholder="Full name"
                    {...register("fullName")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary focus:-translate-y-1 focus:shadow-lg focus:scale-[1.02] transition-all duration-300 ease-out"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="group">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary focus:-translate-y-1 focus:shadow-lg focus:scale-[1.02] transition-all duration-300 ease-out"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="group">
                  <input
                    type="tel"
                    placeholder="Phone"
                    {...register("phone")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary focus:-translate-y-1 focus:shadow-lg focus:scale-[1.02] transition-all duration-300 ease-out"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="group">
                  <textarea
                    placeholder="Message"
                    {...register("message")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary focus:-translate-y-1 focus:shadow-lg focus:scale-[1.02] transition-all duration-300 ease-out"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-[#FFFFFF] text-[#0F147F] cursor-pointer font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 active:scale-95 group"
                >
                  <span className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
                {successMessage && (
                  <p className="text-center text-green-200 font-semibold animate-bounce mt-2">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex flex-col md:flex-row items-center relative h-full w-full justify-around gap-10 md:gap-0 bg-primary mt-10 py-20 overflow-hidden text-center md:text-left">
        <div className=" absolute -bottom-[100px] right-[-100px] z-0 opacity-30">
          <img src={home3} alt="" />
        </div>

        <p className="text-white font-bold text-[24px] md:text-[30px] relative z-10 leading-tight">
          DO YOU NEED <br className="hidden md:block" />
          <span className="md:hidden"> </span>RESTORATION SERVICES?
        </p>
        <button className="bg-[#FFFFFF] relative z-10 capitalize text-[#0F147F] text-[20px] md:text-[26.5193px] rounded-full py-3 px-8 md:py-2 md:px-8 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 whitespace-nowrap">
          get a fast quote
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
