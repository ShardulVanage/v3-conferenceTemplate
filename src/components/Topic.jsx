"use client";
import React from "react";
import logo from '../assets/logo.svg';
// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

import { useId } from "react";
import { IconStackPop } from "@tabler/icons-react";
const grid = [
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
  {
    title: "Meta Ads Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
   {
    title: "Google Ads Track",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  // Add more data objects here...
];

export function Topic() {
  return (
    (<div className="py-8 lg:py-12">
     
     <div className=" max-w-7xl mx-auto sm:pl-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black py-4">What will you Learn from us(Topic)</h2>
        <p className="text-base md:text-lg text-gray-600 pb-8" >
          Discover how our solutions are making an impact worldwide. Our innovative approach connects businesses
          across continents, leveraging cutting-edge technology to bridge gaps and create opportunities in the global
          marketplace.
        </p>
      </div> 
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto px-4">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
            <Grid size={20} />
            <p
              className="text-base font-bold text-neutral-800 dark:text-white relative z-20 inline-flex gap-2">
              {feature.title}
            <IconStackPop/>
            </p>
            <p
              className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>)
  );
}

// const grid = [
//   {
//     title: "HIPAA and SOC2 Compliant",
//     description:
//       "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
//   },
//   {
//     title: "Automated Social Media Posting",
//     description:
//       "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
//   },
//   {
//     title: "Advanced Analytics",
//     description:
//       "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
//   },
//   {
//     title: "Content Calendar",
//     description:
//       "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
//   },
//   {
//     title: "Audience Targeting",
//     description:
//       "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
//   },
//   {
//     title: "Social Listening",
//     description:
//       "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
//   },
//   {
//     title: "Customizable Templates",
//     description:
//       "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
//   },
//   {
//     title: "Collaboration Tools",
//     description:
//       "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
//   },
// ];

export const Grid = ({
  pattern,
  size
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    (<div
      className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div
        className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-purple-100/10 dark:stroke-white/10 stroke-black/10 fill-purple-700/20" />
      </div>
    </div>)
  );
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) {
  const patternId = useId();

  return (
    (<svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height} />
          ))}
        </svg>
      )}
    </svg>)
  );
}


