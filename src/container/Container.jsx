// import React from 'react'
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function Container() {
  return (
    <div className="max-w-screen-lg min-h-screen gap-5 px-4 mx-auto my-16 lg:flex lg:justify-between">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default Container;

// ayusin containers width