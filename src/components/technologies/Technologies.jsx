// import React from 'react'

function Technologies() {
  return (
    <ul className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">
      <li className="lg:flex-grow">
          <div className="flex items-center gap-3 px-5 py-4 border bg-slate-500/10 rounded-xl border-slate-600 backdrop-blur-md lg:grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="size-12 "
            >
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
              ></path>
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
              ></path>
            </svg>
            <div className="flex flex-col ">
              <h3 className="text-xl font-bold">HTML</h3>
              <span className="font-light">Markup language</span>
            </div>
          </div>
      </li>
      
      
    </ul>
  );
}

export default Technologies;
