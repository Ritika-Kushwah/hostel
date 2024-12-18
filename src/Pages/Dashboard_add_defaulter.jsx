import React, { useState } from "react";
import Search from "../Assets/Search.png";
import {faTimes,faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiCalendar } from "react-icons/ci";

const DashboardAddDefaulter = () => {
  const [formData, setFormData] = useState({
    student: "",
    defaultReason: "",
    amount: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-[#2E2E2E] mx-auto p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg shadow-lg w-[748px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white text-2xl font-semibold">Add Defaulter</h1>
        <button className="text-white">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <img
          className="absolute left-3 top-5 w-6 h-6"
          src={Search}
          alt="Search"
        />
        <input
          name="student"
          value={formData.student}
          onChange={handleInputChange}
          className="pl-12 text-white rounded bg-black placeholder-gray-500 text-sm w-[492px] h-[62px]"
          placeholder="Student..."
        />
      </div>

      {/* Default Reason Input */}
      <div className="mb-6">
        <textarea
          name="defaultReason"
          value={formData.defaultReason}
          onChange={handleInputChange}
          className="text-white rounded  py-5 px-4 bg-black placeholder-gray-500 text-sm resize-none  w-[492px] h-[62px]"
          placeholder="Write Default"
        />
        <p className="text-gray-400 ml-[460px] text-xs mt-1">0/100</p>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <input
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          className="text-white rounded py-2 px-4 bg-black placeholder-gray-500 text-sm w-[492px] h-[62px]"
          placeholder="₹Amount"
        />
      </div>

      {/* Due Date Input */}
      <div className="mb-6">
        <h1 className="text-white text-sm mb-2">Due Date</h1>
        <input
          name="dueDate"
          value={formData.dueDate}
          onChange={handleInputChange}
          className="text-white rounded w-[175px] h-[70px] py-4 px-12 bg-black placeholder-gray-500 text-sm"
          placeholder="12 Nov 2022"
        />

        <div>
          <CiCalendar className="-mt-12 ml-4 size-7 text-white" />
        </div>
      </div>

      {/* Upload Proof Button */}
      <div className="mb-6 mt-16">
        <button className="text-white py-2 px-4 border rounded bg-black text-sm w-[286px] h-[61px] flex items-center ">
          Upload File{" "}
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="ml-36" />
        </button>
      </div>

      {/* Submit Button */}
      <button className="bg-sky-600 px-6 py-3 rounded-xl text-white text-lg w-[266px] h-[61px] ml-[200px] mt-[80px] hover:bg-sky-700 transition-colors">
        Add Defaulter
      </button>
    </div>
  );
};

export default DashboardAddDefaulter;
