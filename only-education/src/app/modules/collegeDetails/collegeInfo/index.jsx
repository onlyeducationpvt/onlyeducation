import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";

const CollegeInfo = () => {
  return (
    <section className="w-full h-full text-white">
      <div className="wrapper sm:px-10 py-3 ">
        <div className="sm:p-10 flex flex-col sm:flex-row p-4 bg-white text-black rounded-md border-gray-300 border-[1px]">
          <div className="logo aspect-square w-[100px] h-[100px] relative border-gray-300 border-[1px] rounded-md">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/640px-IIT_Madras_Logo.svg.png"
              fill
              className="object-cover object-center p-3 "
            />
          </div>
          <div className="sm:ml-5 flex flex-col justify-between py-2">
            <h3 className="text-lg font-semibold">
              IIT Madras: Courses, Fees, Admission, Cutoff, Placements
            </h3>
            <div className="flex justify-start items-center text-[#6f6e6f]">
              <span>
                <IoLocation />
              </span>
              <span className=" text-sm font-medium ml-1 ">
                Location: <span>Chennai, Tamil nadu</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#6f6e6f] mx-3"></span>
              <span className="flex items-center text-sm font-medium">
                Rating:
                <span className="flex ml-2 text-[#f0943f]">
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeInfo;
