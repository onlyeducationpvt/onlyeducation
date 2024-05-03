import React from "react";

const CollegeDetailNav = () => {
  return (
    <div className="w-full h-full">
      <div className="sm:px-10 wrapper">
        <div className="bg-white px-2 sm:px-10 py-2 rounded-md border-gray-300 border-[1px]">
          <ul class="flex text-sm font-medium text-center text-[#6f6e6f] overflow-y-scroll ">
            <li class="me-2">
              <a
                href="#"
                aria-current="page"
                class="inline-block p-3 text-white bg-[#f0943f] rounded-lg active"
              >
                Cutoff
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Courses&fees
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Admission
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Placement
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Result
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Infrastructure
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Gallary
              </a>
            </li>
            <li class="me-2">
              <a
                href="#"
                class="inline-block p-3 rounded-lg  hover:text-white hover:bg-[#f0943f]"
              >
                Ranking
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailNav;
