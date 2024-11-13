// import React from 'react'

function Jobs({position,company,date,description}) {
  return (
    <li>
      <div className="">
        <h3 className="font-sans text-xl font-medium tracking-wide mb-2.5">
          Freelance Multimedia Designer @{" "}
          <span className="font-sans font-bold text-[#25DBFF]">iPhiTech</span>
        </h3>
        <p className="text-slate-300 mb-2.5">August 2023 - November 2023</p>
      </div>
      <div className="flex w-full gap-4">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-none mt-2 h-15 w-15 size-2"
        >
          <circle cx="8" cy="8" r="8" fill="#25DBFF" />
        </svg>

        <p className="font-sans font-normal leading-relaxed tracking-wider text-slate-300 ">
          At iPhiTech IT and Digital Solutions, I worked as a freelance
          Multimedia Designer, focusing on designing user-friendly websites and
          mobile app interfaces that aligned with clients
          <span>&apos;</span> brand identities. I created graphics, edited
          videos, and developed product mockups to help brands increase
          engagement and improve their marketing efforts.
        </p>
      </div>
      
    </li>
  );
}

export default Jobs;
