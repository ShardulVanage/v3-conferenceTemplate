import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { Button } from "@material-tailwind/react";

export function Whatis() {
  return (
    (<BackgroundLines className="flex relative items-center justify-center w-full flex-col px-4 bg-gradient-to-t from-black to-gray-900 text-white h-full">
      <h2
        className="text-white text-center text-4xl  lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        What is <br /> Zep Research?
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
       Zep Research World has grown to become what Neil Patel considers “the only absolutely must-attend event in the industry.”
       You will network with the industry’s brightest minds, absorb mastermind-level content on stage, and be exposed to an exhibition hall overflowing with opportunities to push your career forward.
        Experts will take the stage and present new insights, data-driven strategies, and innovative ideas on affiliate and ecommerce marketing.
        After soaking up the knowledge, look out for some extra perks at the end of each day: happy hours, rooftop sunsets, and an irresistible industry nightlife.
      </p>
      <Button variant="gradient" color="yellow" size="lg" className="my-8 z-20">
        Buy Ticket
      </Button>
    </BackgroundLines>)
  );
}
