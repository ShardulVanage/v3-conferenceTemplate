"use client";
import React from "react";
import logo from '../assets/logo.svg';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const data = [
  {
    title: "Meta Ads Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
   {
    title: "Google Ads Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  }, {
    title: "Native Ads Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  }, {
    title: "Tiktok  Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  }, {
    title: "IGaming Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  }, {
    title: "Affliate Marketing Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  // Add more data objects here...
];

export function Topic() {
  return (<>
  <div className="bg-black pt-12">
    <h1 className="text-3xl md:text-4xl font-bold text-center text-white">Elevate Your Online Presence with Our Hosting Solutions(Topics)</h1>
    
  </div>
    <div
      className=" grid sm:grid-cols-3 grid-cols-1 items-center justify-center bg-black w-full gap-4 mx-auto sm:px-60 px-4 pt-12">
      {data.map((item, index) => (
      <Card  key={index} title={item.title}  description={item.description} icon={<AceternityIcon />} >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2} />
        {/* Radial gradient for the cute fade */}
        <div
          className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
      </Card>
      ))}
    </div>
      <p className="text-white text-center py-12 bg-black italic ">Hover over the card to see the Topics</p>
  </>);
}

const Card = ({
  title,
  icon,
  description,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white bg-blue-gray-800/20  group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] ">
    
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="text-white text-2xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-white px-2 text-justify text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-12  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"> 
           {description}
        </p>
      </div>
    </div>)
  );
};

const AceternityIcon = () => {
  return (
    (<>
    <div className="flex flex-col items-center justify-center text-white">
    <img src={logo} alt="Your Company" className="h-20 w-20 text-white group-hover/canvas-card:text-white " />
    <h1>Zep Research</h1>
    </div>
    </>)
  );
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};
