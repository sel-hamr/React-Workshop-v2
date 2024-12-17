import React from "react";

export function BackgroundCard() {
  return (
    <>
      <div className="w-72 h-72 bg-[#efbc25] absolute -top-52 left-56 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
      <div className="w-72 h-80 bg-[#ddddd5] absolute -top-44 -right-20 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
      <div className="w-80 h-96 bg-[#e63e29] absolute -bottom-44 -right-20 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
      <div className="w-72 h-72 bg-[#1e1e1e] absolute -bottom-52 -left-16 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
      <div className="w-80 h-96 bg-[#e96623] absolute top-1/4 -left-48 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
    </>
  );
}
