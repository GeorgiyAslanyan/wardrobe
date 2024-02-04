"use client";
import React, { Suspense, useState } from "react";
import { PuffLoader } from "react-spinners";
import Spline from "@splinetool/react-spline";


const Scene = () => { 

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute flex gap-3 p-3 z-50 top-5 left-5 rounded-xl bg-black border border-neutral-800 text-white">
      <a href="https://t.me/George1307" target="_blank" rel="noopener noreferrer">Telegram @George1307</a>
      <p>Через kwork передавать контакты нельзя, поэтому тут оставил</p>
      </div>
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <PuffLoader color={'white'} /> </div>}>
      <div className="w-screen h-screen">
          <Spline scene="https://prod.spline.design/LLXph7-9uugBtBcj/scene.splinecode"/>
      </div>
    </Suspense>
    </div>
  );
};

export default Scene;
