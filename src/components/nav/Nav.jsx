// import React from 'react'

function Nav() {
  return (
    <nav className="hidden mt-10 lg:block">
      <ul>
        <li className="flex items-center">
          <a href="#about">
            <span className="inline-block mr-2 bg-slate-50/40 size-1 min-w-fit"></span>
            <span className="font-sans text-base font-medium tracking-wider text-slate-500">
              ABOUT ME
            </span>
          </a>
        </li>
        <li className="flex items-center">
          <a href="#experience">
            <span className="inline-block mr-2 bg-slate-50/40 size-1 min-w-fit"></span>
            <span className="font-sans text-base font-medium tracking-wider text-slate-500">
              EXPERIENCES
            </span>
          </a>
        </li>
        <li className="flex items-center">
          <a href="#projects">
            <span className="inline-block mr-2 bg-slate-50/40 size-1 min-w-fit"></span>
            <span className="font-sans text-base font-medium tracking-wider text-slate-500">
              PROJECTS
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
