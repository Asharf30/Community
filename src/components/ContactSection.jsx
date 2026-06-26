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
          <div className="flex items-center gap-1 mt-10">
            <span className="h-[1px] bg-[#000000] flex-1"></span>

            <p className="text-[20px] font-bold text-[#4A4E6D] whitespace-nowrap">
              Restoring Your Home and Life Back to its pre-disaster state.
            </p>

            <span className="h-[1px] bg-[#000000] flex-1"></span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-20">
            <img src={man} alt="" />
            <p className="text-[20px] font-bold text-justify text-[#4A4E6D] leading-relaxed max-w-[500px] mt-10 ">
              There are many places in your Aurora home where water damage can
              take place, from your basement to the attic. Water damage can
              occur from frozen pipes, frozen sprinkler lines, rusted or
              oxidized pipes, toilet overflow, toilet leaks, the water heater,
              refrigerator, dishwasher overflow or washing machine, hardwood
              floor water damage, broken pipe water damage.{" "}
            </p>
          </div>
          <div className="bg-secondary mt-20 max-h-[700px] rounded-2xl w-[490px] justify-center items-center">
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
                className="flex flex-col gap-5 mt-10 px-10 rounded-[10px] "
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    {...register("fullName")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    {...register("phone")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary transition-colors"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-200">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    {...register("message")}
                    className="w-full border bg-white border-[#dde0ef] rounded-[8px] px-4 py-3 text-[14px] text-body-primary placeholder:text-[#b0b4cc] focus:outline-none focus:border-secondary transition-colors"
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
                  className="bg-[#FFFFFF] text-[#0F147F] cursor-pointer font-bold py-2 px-4 rounded hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {successMessage && (
                  <p className="text-center text-green-200 font-semibold">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex relative h-full w-full justify-around bg-primary  mt-10 py-20 overflow-hidden">
        <div className=" absolute  -bottom-[100px] right-[-100px] z-0 opacity-30">
          <img src={home3} alt="" />
        </div>

        <p className="text-white font-bold text-[20px] relative z-10">
          DO YOU NEED <br />
          RESTORATION SERVICES?
        </p>
        <button className="bg-[#FFFFFF] relative z-10 capitalize text-[#0F147F] text-[26.5193px] rounded-full py-2 px-8 cursor-pointer hover:opacity-90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
          get a fast quote
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
