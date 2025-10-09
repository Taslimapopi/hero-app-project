import React from "react";
import { NavLink } from "react-router";
import hero from '../assets/hero.png'
import googleplay from '../assets/Group.png'
import appStoreimg from '../assets/Group (1).png'

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-3 space-y-4 m-4">
        <h1 className="text-3xl text-center font-bold">We Build <br /> <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="text-center"><small>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact</small></p>
        <div className="space-x-2">
            <button className="btn inline "><a href="https://play.google.com/store/games?hl=en_US" target="_blank" className="flex items-center gap-2"><img className="h-6 w-6" src={googleplay} alt="" /> Google Play</a></button>
            <button className="btn"><a href="https://www.apple.com/app-store/" className="flex items-center gap-2" target="_blank"><img src={appStoreimg} alt="" />App Store</a></button>            
        </div>
      </div>
      <div>
        <img className="h-[50%] w-[50%] mx-auto" src={hero} alt="" />

      </div>
    </div>
  );
};

export default Header;
