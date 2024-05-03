import React from "react";
import { RiCalendar2Fill } from "react-icons/ri";
import ApplyLink from "./ApplyLink";

const InfoPage = () => {
  return (
    <div className="w-full h-full px-10">
      <div className="grid grid-cols-4 gap-x-3">
        <div className="bg-white border-gray-300 border-[1px] px-10 rounded-md col-span-3 py-4 ">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img
                className="w-9 h-9 rounded-full border-gray-300 border-[1px]"
                src="https://onlyeducation.in/assets/images/lead-form-logo-only-education.png"
                alt="Ayesha Taneem"
              />
            </div>
            <div>
              <a
                className="text-blue-500 hover:underline"
                href="/author/ayesha-taneem"
                title="Ayesha Taneem"
              >
                Only education
              </a>
              <span className="bg-green-500 text-white text-xs px-1 rounded ml-1">
                Verified
              </span>
              <p className="text-gray-500 text-xs">Updated on - Mar 20, 2024</p>
            </div>
          </div>
          <h3>Latest Updates for IIT Madras</h3>
          <div className="updates flex flex-col text-sm py-4 px-2 ">
            <div className="bg-slate-100 p-3 rounded-md">
              <div className="flex items-center gap-3">
                <span>
                  <RiCalendar2Fill />
                </span>
                <div className="">
                  <span className="text-red-500">02 May 2024: </span>
                  <span>
                    JEE Advanced 2024 exam centre list has been released by IIT
                    Madras on{" "}
                    <span className="font-semibold">May 2, 2024.</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <RiCalendar2Fill />
                </span>
                <div className="">
                  <span className="text-red-500">02 May 2024: </span>
                  <span>
                    JEE Advanced 2024 exam centre list has been released by IIT
                    Madras on{" "}
                    <span className="font-semibold">May 2, 2024.</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <RiCalendar2Fill />
                </span>
                <div className="">
                  <span className="text-red-500">02 May 2024: </span>
                  <span>
                    JEE Advanced 2024 exam centre list has been released by IIT
                    Madras on{" "}
                    <span className="font-semibold">May 2, 2024.</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="mb-4">IIT Madras Highlights 2024</h3>
              <div className=" bg-slate-100 p-3 rounded-md">
                <div className="container mx-auto">
                  <div className="overflow-x-auto">
                    <table className="table-auto">
                      <thead>
                        <tr className="">
                          <th className="px-4 py-2 border">Attribute</th>
                          <th className="px-4 py-2 border">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">
                            Year of Establishment
                          </td>
                          <td className="border px-4 py-2">1959</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Type of Institute
                          </td>
                          <td className="border px-4 py-2">Public</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Accreditation</td>
                          <td className="border px-4 py-2">ISO</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Campus Area</td>
                          <td className="border px-4 py-2">620 acres</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Courses/Degree Offered
                          </td>
                          <td className="border px-4 py-2">
                            Undergraduate and Postgraduate
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">
                            Infrastructure Facilities
                          </td>
                          <td className="border px-4 py-2">
                            Auditorium, hostel, transport, library, canteen,
                            etc.
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Location</td>
                          <td className="border px-4 py-2">Chennai</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-8">
              <h3 className="  mb-4">Admission</h3>
              <div className=" bg-slate-100 p-3 rounded-md ">
                <ul>
                  <li>
                    Admission Process: Online application followed by entrance
                    exam and counseling.
                  </li>
                  <li>
                    Entrance Exams: JEE Main for undergraduate courses, GATE for
                    postgraduate courses.
                  </li>
                  <li>
                    Eligibility Criteria: Minimum 75% in 10+2 for undergraduate,
                    bachelor's degree for postgraduate.
                  </li>
                  <li>
                    Important Dates: Application deadline - June 30, Entrance
                    Exam - July 15.
                  </li>
                </ul>
              </div>
            </div>

            <div className="  mt-8">
              <h3 className="  mb-4">Eligibility Criteria</h3>
              <div className="bg-slate-100 p-3 rounded-md  ">
                <ul>
                  <li>B.Tech: Minimum 75% in 10+2 with PCM.</li>
                  <li>
                    M.Tech: Bachelor's degree in relevant field with minimum 60%
                    marks.
                  </li>
                  <li>
                    Ph.D.: Master's degree in relevant field with minimum 55%
                    marks.
                  </li>
                </ul>
              </div>
            </div>

            <div className=" mt-8">
              <h3 className="  mb-4">Ranking</h3>
              <div className="bg-slate-100 p-3 rounded-md  ">
                <ul>
                  <li>NIRF Ranking 2023: Overall - 2, Engineering - 1.</li>
                  <li>QS World University Rankings 2023: Overall - 42.</li>
                  <li>
                    Times Higher Education World University Rankings 2023:
                    Overall - 67.
                  </li>
                </ul>
              </div>
            </div>

            <div className=" mt-8">
              <h3 className="  mb-4">Placement</h3>
              <div className="bg-slate-100 p-3 rounded-md  ">
                <ul>
                  <li>Placement Record: 95% of eligible students placed.</li>
                  <li>
                    Top Recruiting Companies: Google, Microsoft, Apple, Tata
                    Group.
                  </li>
                  <li>Average Salary Package: INR 20 lakhs per annum.</li>
                  <li>
                    Placement Assistance: Career counseling, mock interviews,
                    resume building workshops.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white border-gray-300 border-[1px] px-3 rounded-md col-span-3 ">
            <div id="liveApplicationForm" className="py-2">
              <div className="sideBarSection desktopOnly rounded-lg">
                <p className="sidebarHeading py-2  text-lg font-bold">
                  <span className="h-2 w-2 bg-green-600 "></span> Live
                  Application Form
                </p>
                <div className="sidebarLinks overflow-scroll max-h-[600px]">
                  <ApplyLink />
                  <ApplyLink />
                  <ApplyLink />
                  <ApplyLink />
                  <ApplyLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
