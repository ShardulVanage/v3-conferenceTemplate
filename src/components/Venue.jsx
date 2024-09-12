"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export  function Venue() {
  return (
    
    (
    <>
    <div className="bg-gradient-to-b from-black to-gray-900 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">THE VENUE 📌</h1>
      <p className="text-xl md:text-2xl font-bold mb-4 text-white text-center">Hungexpo Budapest Congress and Exhibition Center</p>
    <div className="h-[30rem] w-full flex items-center justify-center  text-white">
      <PinContainer className={"bg-blue-gray-50 text-black  max-w-7xl"} title="Budapest 🌎" >{/* href="" */}
      <img className="absolute bg-black opacity-60" src="https://images.unsplash.com/photo-1500078974918-738828bc0422?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div
          className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 xl:w-[200rem] md:w-[30rem] w-[20rem] lg:h-[20rem] h-[12rem] px-12 justify-center items-center bg-black ">
          
          
        </div>
      </PinContainer>
    </div>
    </div>
    </>
    )
  );
}
