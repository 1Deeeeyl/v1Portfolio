// import React from 'react'

function Nav() {
  return (
    <nav className="hidden mt-10 lg:block">
      <ul>
        <li className="flex items-center">
          <span className="inline-block mr-2 bg-slate-50/40 size-1 min-w-fit"></span>
          <span className="font-sans text-base font-medium tracking-wider text-slate-500">
            ABOUT ME
          </span>
        </li>
        <li className="flex items-center">
          <span className="inline-block mr-2 bg-slate-50/40 size-1 min-w-fit"></span>
          <span className="font-sans text-base font-medium tracking-wider text-slate-500">
            EXPERIENCES
          </span>
        </li>
        <li className="flex items-center">
          <span className="inline-block mr-2 bg-slate-50/40 size-1 min-w-fit"></span>
          <span className="font-sans text-base font-medium tracking-wider text-slate-500">
            PROJECTS
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
