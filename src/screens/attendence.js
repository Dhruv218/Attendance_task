import { useLocation } from "react-router-dom";
import Header from "../components/header";
import attendance_img from "../asssests/attendance_img.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import Footer from "../components/footer";

export default function Mark_Attendence() {
  let location = useLocation();
  const [regno, setregno] = useState("");
  const [date, setdate] = useState("");
  const [period, setperiod] = useState("");

  const scrolltoform = () => {
    const element = document.getElementById("attendance");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const submitform = () => {
    if (regno == "" || date == "" || period == "") {
      toast.error("Fill in all the fields!", {
        autoClose: 2500,
      });
    } else {
      toast.success("Attendance Marked", {
        autoClose: 2500,
      });
      setregno("");
      setperiod("");
      setdate("");
    }
  };
  return (
    <>
      <Header username={location.state.username} />
      <div className="flex md::flex-row w-full justify-center items-center gap-8 py-10 max-[550px]:flex-col">
        <img src={attendance_img} className="w-1/2 h-[25rem] rounded max-[550px]:w-full max-[550px]:h-[15rem]" />
        <div className="flex text-center flex-col gap-4 min justify-center items-center">
          <p className="text-green-800 font-serif font-extrabold text-3xl">
            Mark Attendance
          </p>
          <p className="text-gray-800 text-xl font-medium font-serif">
            Get the attendance of your virtual class in a single click!
          </p>
          <div
            className="px-8 mt-6 py-4 text-gray-800 text-xl font-medium font-serif hover:text-white hover:bg-green-600 transition-all duration-300 hover:text-2xl rounded border-gray-800 border"
            onClick={scrolltoform}
          >
            Click me
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-green-500 ">
        <div
          id="attendance"
          className="bg-gray-100 flex w-2/6 max-[550px]:w-10/12 px-8 gap-4 rounded flex-col py-12 my-12"
        >
          <p className="text-black font-serif text-xl font-extrabold ">
            Register Number
          </p>
          <input
            className="p-2"
            type="text"
            placeholder="Registration Number"
            value={regno}
            onChange={(e) => {
              setregno(e.target.value);
            }}
          />
          <p className="text-black font-serif text-xl font-extrabold ">
            Period Number
          </p>
          <input
            className="p-2"
            type="number"
            min={1}
            max={8}
            placeholder="Period no"
            value={period}
            onChange={(e) => {
              setperiod(e.target.value);
            }}
          />
          <p className="text-black font-serif text-xl font-extrabold ">Date</p>
          <input
            value={date}
            className="p-2"
            type="date"
            min={1}
            max={8}
            placeholder="Date"
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
          <button
            className="px-8 mt-6 py-4 text-gray-800 text-xl font-medium font-serif hover:text-white hover:bg-green-600 transition-all duration-300 hover:text-2xl rounded border-gray-800 border"
            onClick={submitform}
          >
            Mark Attendance
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
