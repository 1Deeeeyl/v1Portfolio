// import React from 'react'

function ToolsUsed({ title, description, logo, accent }) {
  return (
    <li className=" lg:grow lg:min-w-[281px]">
      <div
        className={`flex items-center gap-4 px-5 py-4 border bg-slate-500/10 rounded-xl border-slate-600 hover:bg-slate-500/20 backdrop-blur-md transition-all ease-in-out duration-200 ${accent}`}
      >
        {logo}

        <div className="flex flex-col ">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="font-light">{description}</span>
        </div>
      </div>
    </li>
  );
}

export default ToolsUsed;
