import React from "react";
import Button from "./Button";

const PageNotFound = () => {
  return (
    <div className="flex flex-col w-[500px] mx-auto text-center mt-[-50px]">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="notfound"
        className="w-[500px]"
      />
      <div id="info">
        <h3 className="text-2xl mb-5">This page could not be found !</h3>
        <Button navto={-1}>Go Back</Button>
      </div>
    </div>
  );
};

export default PageNotFound;
