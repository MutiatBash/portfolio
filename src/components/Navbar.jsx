import { useState, useContext } from "react";
// import Logo from '../assets/svg/logo.svg'
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "#projects",
    text: "Projects",
  },
  {
    id: 4,
    url: "/resume",
    text: "Resume",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex flex-col gap-3 h-full py-4 px-4 md:px-14 lg:px-16 bg-white border border-b-[#C6C9CF] sticky top-0 z-20">
      <div className="w-full flex items-center justify-between">
        <div>
          {/* <img
            // src={Logo}
            alt="logo"
          /> */}
          <h5>MB</h5>
        </div>
        <ul className="hidden lg:flex items-center gap-5 lg:gap-[3rem]">
          {links.map((links) => (
            <li className="group relative" key={links.id}>
              <Link
                to={links.url}
                className={`nav-item text-[#353A43] transition duration-300 ease-in text-lg font-medium ${
                  location.pathname === links.url ? " text-slate-900 font-bold w-[fit-content]" : ""
                }`}
              >
                {links.text}
              </Link>
              <div className="absolute w-full left-0 h-0.5 bg-slate-900 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex flex-row gap-16 items-center justify-between">
          <Button text={"Get in touch"} className=" text-white" />
        </div>
        <div className="flex lg:hidden flex-row gap-10 items-center justify-between">
          <button onClick={handleMenu} className="">
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && <MobileMenu />}
    </div>
  );
};

export default Navbar;
