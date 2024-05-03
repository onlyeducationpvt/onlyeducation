import React from "react";
import CollegeInfo from "./collegeInfo";
import CollegeDetailNav from "./collegeDetailNav";
import InfoPage from "./infoPage";

const CollegeDetailTemplate = () => {
  return (
    <>
      <CollegeInfo />
      <CollegeDetailNav />
      <InfoPage />
    </>
  );
};

export default CollegeDetailTemplate;
