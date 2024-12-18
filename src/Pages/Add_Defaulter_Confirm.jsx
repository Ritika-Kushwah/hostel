import React from "react";
import Boy from "../Assets/Boy.jpg";
import { RxCross2 } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";

const Defalt = () => {
  return (
    // Main div
    <div className="bg-[#2E2E2E] w-[430px] rounded-lg m-10 ">
      {/* Add Defaulter div */}
      <div className=" text-white gap-64 flex p-6 rounded-lg ">
        <h2 className="text-base font-normal mb-16">Add Defaulter</h2>

        <RxCross2 className="text-lg cursor-pointer" />
      </div>
      {/* Image and name */}
      <div className="flex  mb-4 ml-8">
        <img src={Boy} className="w-8 h-8 rounded-full mr-4" alt="Boy" />
        <div>
          <h3 className="text-base mt-1 text-white font-semibold">
            Abhinav Srivastava
          </h3>
        </div>
      </div>
      <p className="text-white text-base m ml-8">
        Broke 4 Test Tubes in Hostel Mess
      </p>
      {/* buttons  */}
      <div className="flex ml-8 mb-2">
        <div className="mt-4 flex">
          <button className="text-[#B5B5B5] py-2 px-2 bg-[#111111] text-sm mr-2 rounded-lg">
            Fine: ₹1500
          </button>
          <div className="flex px-1">
            <button className="text-[#B5B5B5] py-2 px-2 flex bg-[#111111] text-sm mr-2 rounded-lg ">
              <CiCalendar className="mt-1 mr-2 " />
              12 Nov 2022
            </button>
          </div>
        </div>
      </div>
      {/* Confirm button */}
      <div className="mx-36">
        <button className="bg-[#00868D] hover:bg-sky-500  py-2 px-12 text-white font-bold  mt-14 mb-6 text-right rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Defalt;
