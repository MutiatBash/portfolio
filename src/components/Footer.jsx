import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import Logo from '../assets/svg/logo_white.svg'

const Footer = () => {
  return (
    <div className="w-full h-full px-4 py-2 lg:px-16 bg-white">
      <div className="flex flex-col flex-wrap md:flex-row justify-between">
        {/* <img src={Logo} alt="" /> */}
      </div>
      <div className="border-[0.3px] w-full mt-10 "></div>
      <div className="pt-6 flex flex-row justify-between text-gray-600">
        <div>
          <p>2023 Mutiat Bashua</p>
        </div>
        <div className="flex flex-row gap-4">
          <span className="">Built with {" "}<FontAwesomeIcon icon={faHeart} style={{color:"red"}}/> </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
