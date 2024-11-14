// import React from 'react'

function Jobs({ position, company, date, description }) {
  return (
    <li className="">
      <div className="">
        <h3 className="font-sans text-xl font-medium tracking-wide mb-2.5">
          {position} @&nbsp;
          <span className="font-sans font-bold text-[#25DBFF]">{company}</span>
        </h3>
        <p className="text-slate-300 mb-2.5">{date}</p>
      </div>
      <ul className="flex flex-col gap-[15px]">
        {description.map((bullet,index)=>{
          return(
            <li className="flex w-full gap-4" key={index}>
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
         {bullet}
        </p>
      </li>
          )
        })}
      
      
      </ul>
      
    </li>
  );
}

export default Jobs;
