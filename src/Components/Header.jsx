import React from "react";
import { NavLink } from "react-router";
import hero from '../assets/hero.png'

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-3 space-y-2 m-4">
        <h1 className="text-2xl text-center font-bold">We Build <br /> Productive Apps</h1>
        <p className="text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact</p>
        <div>
            <button className="btn btn-ghost"><a href="">Google Play</a></button>
            <button className="btn btn-ghost"><a href="">App Stoor</a></button>            
        </div>
      </div>
      <div>
        <img className="h-[50%] w-[50%] mx-auto" src={hero} alt="" />

      </div>
    </div>
  );
};

export default Header;
