import { FlipWords } from "./ui/flip-words";
import { useEffect, useRef, useState } from 'react'
import { AuroraBackground } from './ui/aurora-background'
import Card from "./ui/card";
import logo from '../assets/logo.svg';
import { Button } from "@material-tailwind/react";
import p1 from '../assets/patners/1.png';
import p2 from '../assets/patners/2.png';
import p3 from '../assets/patners/3.png';
import p4 from '../assets/patners/4.png';
import p5 from '../assets/patners/5.png';
import p6 from '../assets/patners/6.png';
import p7 from '../assets/patners/7.png';
import p8 from '../assets/patners/8.png';
import p9 from '../assets/patners/9.png';
import p10 from '../assets/patners/10.png';
import p11 from '../assets/patners/11.png';
import p12 from '../assets/patners/12.png';
import p13 from '../assets/patners/13.png';
import p14 from '../assets/patners/14.png';
import { motion } from "framer-motion";
const logos = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
];
export default function Home() {
    const words = ["Affiliate Networks", "Advertisers", "Ecommerce Marketers", "Affiliate Marketing","Traffic Sources"];
    
    
  return (
    <>
    <section className="bg-gray-900 ">
   <AuroraBackground>
    <div className='w-screen sm:h-screen flex sm:flex-row justify-between items-center flex-col-reverse'>  
    <div className=' relative z-10 sm:w-1/2 flex flex-col justify-center items-center bg-transparent '>
      <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8 lg:ml-24 px-2 ">
          <img
            className="h-16"
            src={logo}
            alt="Your Company"
          />
          <div className="mt-24 sm:mt-32 lg:mt-12">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-100 ring-1 ring-inset ring-indigo-100/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300 ">
                <span>Budapest 2025</span>
                
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
           
           <Button variant="gradient" color="yellow" size="lg">Buy Now</Button>
      
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
    </div>
        <div className=' sm:absolute  h-screen w-screen  '  >
        <Card/>
        </div>
      </div>
        </AuroraBackground>
        <div className=" bottom-0 left-0 right-0 overflow-hidden py-4 bg-black bg-opacity-50 mt-12">
          <motion.div
            className="flex"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className="mx-8 h-10 sm:h-16 w-full grayscale hover:grayscale-0" />
            ))}
          </motion.div>
        </div>
        </section>
        </>
  )
}

