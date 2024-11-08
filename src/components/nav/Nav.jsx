// import React from 'react'

function Nav() {
  return (
    <nav className="mt-10">
      <ul>
        <li className="flex items-center">
          <span className="inline-block mr-2 bg-slate-50/40 size-1"></span>
          <span className="font-sans text-base font-medium text-slate-50/40">
            ABOUT ME
          </span>
        </li>
        <li className="flex items-center">
          <span className="inline-block mr-2 bg-slate-50/40 size-1"></span>
          <span className="font-sans text-base font-medium text-slate-50/40">
            EXPERIENCES
          </span>
        </li>
        <li className="flex items-center">
          <span className="inline-block mr-2 bg-slate-50/40 size-1"></span>
          <span className="font-sans text-base font-medium text-slate-50/40">
            PROJECTS
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
