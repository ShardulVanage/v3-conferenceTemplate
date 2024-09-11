"use client";


import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const dataList = [
  {
    title: 'Business Development Manager, RollerAds',
    description: 'Pierre Bertin is thrilled to introduce himself as a seasoned professional with over 10 years of experience in online advertising.',
    img: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Shardul Vanage',
    socialLink: 'https://twitter.com/mannupaaji',
  },
  {
    title: 'CEO, New Money Worldwide',
    description: 'Vik Vallo is a leading figure in the digital marketing industry, with a remarkable 15-year journey from a music producer to becoming the Chief Operating Officer of Mobile Pushers',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'NaShardul Vanageme',
    socialLink: 'https://twitter.com/mannupaaji',
  },
  {
    title: 'CMO, PandaRocket',
    description: 'Robin is the CMO of Yakkyo SpA, a company dedicated to providing 360° support to ecommerce ventures. This support is delivered through Yakkyofy for operational needs and Pandarocket for AI-powered marketing solutions',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Shardul Vanage',
    socialLink: 'https://twitter.com/mannupaaji',
  },
  
  // Add more data objects here
];
export function Speaker() {
  return (
    (
    <div className="bg-black pt-12">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Speaker at Zep Reserach</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2  sm:px-56  px-4">
     {dataList.map((data, index) => (
    <CardContainer key={index} className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4 px-4">
          <img
            src={data.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
            alt="thumbnail" />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white pt-4">
         {data.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
         {data.description}
        </CardItem>
       
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
           {data.name} 
          </CardItem>
          <CardItem
            translateZ={20}
            href={data.socialLink}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Twitter
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    ))}
    </div>
    </div>
    )
  );
}
