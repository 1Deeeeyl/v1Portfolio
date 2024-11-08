// import React from 'react'
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function Container() {
  return (
    <div className="max-w-screen-lg min-h-screen gap-5 px-6 py-16 mx-auto lg:flex lg:justify-between md:px-12 md:py-20 lg:py-0">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default Container;

// ayusin containers width