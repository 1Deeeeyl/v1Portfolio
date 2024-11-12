// import React from 'react'

function ToolsUsed({ title, description, svg }) {
  return (
    <li className="lg:grow">
      <div className="flex items-center gap-4 px-5 py-4 border bg-slate-500/10 rounded-xl border-slate-600 backdrop-blur-md hover:border-[#FF6D00]">
        {svg}

        <div className="flex flex-col ">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="font-light">{description}</span>
        </div>
      </div>
    </li>
  );
}

export default ToolsUsed;
