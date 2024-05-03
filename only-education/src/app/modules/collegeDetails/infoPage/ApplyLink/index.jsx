import React from "react";

const ApplyLink = () => {
  return (
    <>
      <a
        href="https://apply.ritchennai.org/?utm_source=Getmyuni&amp;utm_medium=OL01&amp;utm_campaign=RIT24"
        title="Rajalakshmi Institute of Technology - RIT"
        className="listCard block bg-gray-100 p-3 rounded-md mb-6"
        target="_blank"
        rel="nofollow"
      >
        <div className="flex items-center">
          <div className="sidebarImgDiv mr-4">
            <img
              className="lazyload rounded"
              width="72"
              height="72"
              loading="lazy"
              data-src="https://media.getmyuni.com/azure/college-image/small/rajalakshmi-institute-of-technology-rit-chennai.jpg"
              src="https://media.getmyuni.com/azure/college-image/small/rajalakshmi-institute-of-technology-rit-chennai.jpg"
              alt="logo"
            />
          </div>
          <div className="sidebarTextLink">
            <p className="cardText text-lg font-semibold">
              Rajalakshmi Institute of Technology - RIT
            </p>
            <p className="subText text-gray-600">B.Tech</p>
            <p className="applyText text-blue-500 font-semibold">Apply Now</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ApplyLink;
