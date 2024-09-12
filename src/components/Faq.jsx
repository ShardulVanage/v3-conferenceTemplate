import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export function Faq() {
  return (
    <div className='flex flex-col justify-start items-start  pl-7 pb-12 mx-auto bg-gradient-to-t from-black to-gray-900'>
      <div className='max-w-7xl ml-56'>
       <h1 className="mt-10 max-w-7xl text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl pb-12 ">
             Frequently  Asked  Questions
            </h1>
      <Accordion
        className="flex w-full flex-col"
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        {accordionData.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
              <div className="flex items-center py-2">
                <ChevronRight  className={`h-7 w-7 text-yellow-500 font-bold transition-transform duration-200 group-data-[expanded]:rotate-90`}  />
                <motion.div
                  className="ml-2 sm:text-3xl text-2xl text-gray-100"
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-gray-300 text-base  sm:text-xl">
                {item.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      </div>
    </div>
  );
}

const accordionData = [
  {
    value: "1",
    title: "How many tickets are in Company Pass?",
    content: "Please contact us for more information about Company Pass tickets."
  },
  {
    value: "2",
    title: "Is there an after party / networking event?",
    content: "Yes, Zep Research features an after-party and networking events. Check the event schedule for details."
  },
  {
    value: "3",
    title: "Do you offer additional discounts?",
    content: "Discounts may be available for students, military personnel, or groups. Contact us for more information."
  },
  {
    value: "4",
    title: "Who attends Zep Research?",
    content: "Researchers, professionals, and industry experts attend Zep Research."
  },
   {
    value: "5",
    title: "I need a visa to attend, can you send me an invitation letter?",
    content: "Please contact us with your ticket confirmation and visa requirements, and we'll assist with an invitation letter."
  },
   {
    value: "6",
    title: "How can I purchase a ticket bundle?",
    content: "Contact us for information on purchasing ticket bundles or Company Passes."
  }
];