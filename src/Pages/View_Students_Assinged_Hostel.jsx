import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Boy from "../Assets/Boy.jpg";
import Vector1 from "../Assets/Vector 1.png";
import Vector2 from "../Assets/Vector 2.png";
import Vector3 from "../Assets/Vector 3.png";
import F1 from "../Assets/F1.png";
import { CiSearch } from "react-icons/ci";

const StudentsAssignedHostel = () => {
  const students = [
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
    { name: "Abhinav Srivastava", hostel: "H1", room: 112 },
  ];

  return (
    <div className="bg-[#2E2E2E] h-[1117px] w-[980px] text-white p-6 m-40 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="justify-between mt-5 items-center mb-6">
          <button className="text-white mb-5">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>

          <h1 className="text-2xl font-bold">Students Assigned Room</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-6 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 bg-black px-12 py-2 rounded-md text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <div>
            <CiSearch className="bg-transparent mt-1 -ml-72 text-2xl" />
          </div>

          <button className="bg-black px-4 py-2 rounded-md  hover:bg-gray-600 gap-2 flex text-xs">
            <img className="size-3 w-6 " src={F1} alt="F1" />
            Filter
          </button>
        </div>

        {/* Students List */}
        <div className="bg-black rounded-lg h-[867px] w-[876px] overflow-y-scroll no-scrollbar ">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b  border-gray-700 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-800 flex rounded-full">
                  <img className="rounded-full" src={Boy} alt="Boy" />
                </div>
                <div className="flex h-5 gap-52">
                  <p className="text-xs font-medium flex">{student.name}</p>
                  <p className="text-xs text-gray-400 gap-4 flex">
                    <img className="size-4" src={Vector1} alt="Vector1" />
                    {student.hostel}
                  </p>
                  <p className="text-xs text-gray-400 flex gap-4">
                    <img className="size-4" src={Vector2} alt="Vector2" />
                    {student.room}{" "}
                  </p>
                </div>
              </div>
              <button className="">
                <img className="size-3 w-4" src={Vector3} alt="Vector3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsAssignedHostel;
