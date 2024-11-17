// import React from 'react'
import { Link } from "react-scroll";
import { useState } from "react";

function Nav() {
  const [activeSection, setActiveSection] = useState("");

  // Callback function for when the section becomes active
  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="hidden mt-10 lg:block">
      <ul className="flex flex-col gap-3">
        <li className="group">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={0}
            onSetActive={() => handleSetActive("about")}
            className={`flex items-center cursor-pointer ${
              activeSection === "about" ? "text-slate-50" : "text-slate-500"
            } group-hover:text-slate-50`}
          >
            <span
              className={`inline-block mr-2 min-h-[1px] ${
                activeSection === "about"
                  ? "bg-slate-50 min-w-[75px]"
                  : "bg-slate-500 min-w-[15px]"
              } transition-all ease-in-out duration-200 group-hover:bg-slate-50 group-hover:min-w-[75px]`}
            ></span>
            <span
              className={`font-sans text-base font-medium ${
                activeSection === "about" ? "tracking-widest" : "tracking-wider"
              } transition-all ease-in-out duration-200 group-hover:tracking-widest`}
            >
              ABOUT ME
            </span>
          </Link>
        </li>
        <li className="group">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={0}
            onSetActive={() => handleSetActive("experience")}
            className={`flex items-center cursor-pointer ${
              activeSection === "experience"
                ? "text-slate-50"
                : "text-slate-500"
            } group-hover:text-slate-50`}
          >
            <span
              className={`inline-block mr-2 min-h-[1px] ${
                activeSection === "experience"
                  ? "bg-slate-50 min-w-[75px]"
                  : "bg-slate-500 min-w-[15px]"
              } transition-all ease-in-out duration-200 group-hover:bg-slate-50 group-hover:min-w-[75px]`}
            ></span>
            <span
              className={`font-sans text-base font-medium ${
                activeSection === "experience"
                  ? "tracking-widest"
                  : "tracking-wider"
              } transition-all ease-in-out duration-200 tracking-widest`}
            >
              EXPERIENCES
            </span>
          </Link>
        </li>
        <li className="group">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={0}
            onSetActive={() => handleSetActive("projects")}
            className={`flex items-center cursor-pointer ${
              activeSection === "projects" ? "text-slate-50" : "text-slate-500"
            } group-hover:text-slate-50`}
          >
            <span
              className={`inline-block mr-2 min-h-[1px] ${
                activeSection === "projects"
                  ? "bg-slate-50 min-w-[75px]"
                  : "bg-slate-500 min-w-[15px]"
              } transition-all ease-in-out duration-200 hover:bg-slate-50 group-hover:bg-slate-50 group-hover:min-w-[75px]`}
            ></span>
            <span
              className={`font-sans text-base font-medium ${
                activeSection === "projects"
                  ? "tracking-widest"
                  : "tracking-wider"
              } transition-all ease-in-out duration-200 group-hover:tracking-widest`}
            >
              PROJECTS
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
