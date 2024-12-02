import React from "react";
import LeftContainerPg1 from "./components/left-container-pg1/LeftContainerPg1";
import RightContainerPg1 from "./components/right-container-pg1/RightContainerPg1";
import LeftContainerPg2 from "./components/left-container-pg2/LeftContainerPg2";
import RightContainerPg2 from "./components/right-container-pg2/RightContainerPg2";

function page() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <LeftContainerPg1 />
      </div>
      <div className="w-1/2">
        <RightContainerPg1 />
      </div>
      <div className="w-1/2">
        <LeftContainerPg2 />
      </div>
      <div className="w-1/2">
        <RightContainerPg2 />
      </div>
    </div>
  );
}

export default page;
