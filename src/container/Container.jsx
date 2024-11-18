// import React from 'react'
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Blob from "../components/blob/Blob";
function Container() {
  return (
    <>
    <Blob/>
    <div className="max-w-screen-xl min-h-screen gap-5 px-6 py-16 mx-auto antialiased lg:flex lg:justify-between md:px-12 md:py-20 lg:py-0 text-slate-50">
      <LeftColumn />
      <RightColumn />
    </div>
    </>
  );
}

export default Container;

