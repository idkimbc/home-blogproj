import React from "react";
import RightContainer from "./components/right-container-pg1/RightContainerPg1";
import LeftContainer from "./components/left-container-pg1/LeftContainerPg1";

function page() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <LeftContainer />
      </div>
      <div className="w-1/2">
        <RightContainer />
      </div>
    </div>
  );
}

export default page;
