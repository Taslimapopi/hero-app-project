import React from "react";
// import useApps from "../Hooks/useApps";

const State = () => {
//   const apps = useApps();

  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mb-5 pb-5 text-white">
      <h1 className="text-2xl font-bold text-center pt-7" >
        Trusted by Millions, Built for You
      </h1>
      <div className="flex justify-center items-center md:gap-5 md:p-3">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <p ><small>Total Downloads</small></p>
          <h1 className="text-3xl font-bold">
            27.8M
          </h1>
          <p className="text-[12px] text-center">21% more than last month</p>
        </div>
        <div className="space-y-2 flex flex-col items-center justify-center">
          <p><small>Total Reviews</small></p>
          <h1 className="text-3xl font-bold">
            906k
          </h1>
          <p className="text-[12px] text-center">46% more than last month</p>
        </div>
        <div className="space-y-2 flex flex-col items-center justify-center">
          <p><small>Active Apps</small></p>
          <h1 className="text-3xl font-bold">
            132+
          </h1>
          <p className="text-[12px] text-center">31% more than last month</p>
        </div>
      </div>
    </div>
  );
};

export default State;
