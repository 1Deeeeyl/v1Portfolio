// import React from 'react'

import BodyContent from "../components/bodyContent/BodyContent";
import Footer from "../components/footer/Footer";
function RightContainer() {
  return (
    <div className="flex flex-col gap-[100px] mt-16 lg:m-0 lg:w-1/2 lg:py-[100px]">
      <BodyContent />
      <Footer />
    </div>
  );
}

export default RightContainer;
