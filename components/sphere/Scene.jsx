"use client";
import React, { Suspense } from "react";
import { PuffLoader } from "react-spinners";
import Spline from "@splinetool/react-spline";

export default function App() {  
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <PuffLoader color={'white'} /> </div>}>
      <div className="w-full h-screen">
        <Spline scene="https://prod.spline.design/b95DG9vFNraZulL0/scene.splinecode" />
      </div>
    </Suspense>
  );
};
