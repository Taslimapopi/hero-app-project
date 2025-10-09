import React from "react";
import imgins from "../assets/demo-app (1).webp";
import { Download, Star, ThumbsUp } from "lucide-react";

const InstalledCard = () => {
  return (
    <div>
      <div className="flex gap-4 items-center border-b rounded-xl p-4">
        <figure className="h-60 overflow-hidden mt-2">
          <img className="w-full object-cover p-2 " src={imgins} alt="" />
        </figure>
        <div className="space-y-8">
          <div className="border-b-1">
            <h1 className="font-bold">SmPlan:ToDo List with Reminder</h1>
            <p className="pb-2">Developed by productive.io</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Download className="text-[#00D390]" />
              <p>
                <small>Downloads</small>
              </p>
              <p>8m</p>
            </div>
            <div>
              <Star className="fill-[#FF8811] text-[#FF8811]" />
              <p>
                <small>ratings</small>
              </p>
              <p>12M</p>
            </div>
            <div>
              <ThumbsUp className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] fill-white text-white"></ThumbsUp>
              <p>
                <small>reviews</small>
              </p>
              <p>124535</p>
            </div>
          </div>
          <div>
            <button>Uninstall</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-1 rounded-xl">
        <div className="flex items-center rounded-xl ">
          
            <img className="w-[20%] h-[20%] object-cover p-2 " src={imgins} alt="" />
          
          <div className="space-y-1">
            <div className="">
              <h1 className="font-semibold">SmPlan:ToDo List with Reminder</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex  justify-center items-center">
                <Download className="text-[#00D390] w-4 h-4" />
                <p>8m</p>
              </div>
              <div className="flex  justify-center items-center">
                <Star className="fill-[#FF8811] text-[#FF8811] w-4 h-4" />
                <p>12M</p>
              </div>
              <div className="flex  justify-center items-center">
                <ThumbsUp className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] fill-white text-white w-4 h-4"></ThumbsUp>
                <p>124535</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
