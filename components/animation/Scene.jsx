"use client";
import React, { Suspense, useState } from "react";
import { PuffLoader } from "react-spinners";
import Spline from "@splinetool/react-spline";


const Scene = () => {  
  const [active, setActive] = useState(0)

  return (
    <div className="w-screen h-screen relative">
      {/* <div className="absolute flex gap-3 p-3 z-50 top-5 left-5 rounded-xl bg-black border border-neutral-800 text-white">
        <button className={`w-10 h-10 flex items-center justify-center rounded-lg ${active === 0 ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setActive(0)}>1</button>
        <button className={`w-10 h-10 flex items-center justify-center rounded-lg ${active === 1 ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setActive(1)}>2</button>
        <button className={`w-10 h-10 flex items-center justify-center rounded-lg ${active === 2 ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setActive(2)}>3</button>
        <button className={`w-10 h-10 flex items-center justify-center rounded-lg ${active === 3 ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setActive(3)}>4</button>
      </div> */}
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <PuffLoader color={'white'} /> </div>}>
      <div className="w-screen h-screen">
          <Spline scene="https://prod.spline.design/LLXph7-9uugBtBcj/scene.splinecode"/>
      </div>
       {/* : active === 1 ?
      <div className="w-screen h-screen">
          <Spline scene="https://prod.spline.design/BuhdgQuqS8MNecrq/scene.splinecode"  />
      </div> : active === 2 ?
      <div className="w-screen h-screen">
          <Spline scene="https://prod.spline.design/sUV3WzSIkPucnwZg/scene.splinecode"  />
      </div> :
      <div className="w-screen h-screen">
          <Spline scene="https://prod.spline.design/mIfy6Zpe5XFpBM98/scene.splinecode"  />
      </div>} */}
    </Suspense>
    </div>
  );
};

export default Scene;
