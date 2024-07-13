import React from "react";
const Navigation = () => {
  return (
    <>
      <div className="w-full h-[10%] bg-zinc-800" >
        <div className="p-4 w-full flex justify-between text-center items-center gap-5 text-2xl text-zinc-200">
          <a href="">home</a>
          <a href="">about</a>
          <a href="">contact</a>
          <a href="">album</a>
          <a href="">search</a>
        </div>
      </div>
    </>
  );
};
export default Navigation;