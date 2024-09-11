import React from "react";
import { EvervaultCard, Icon } from "../components/ui/evervault-card";
import { Typography } from "@material-tailwind/react";


const Componet1 = () => {
  return (<>
    <h1 className="font-bold pl-2 py-8"> Pathers</h1>
  <div className="flex flex-row justify-evenly   font-bold mx-auto">
    <div className=" border border-black/[0.2] flex flex-col  max-w-sm  p-4 relative h-auto drop-shadow-lg bg-white mx-2">
        <h1>logo</h1>
        <h1>logo</h1>
        <h1>logo</h1>
    </div>
    <div className=" border border-black/[0.2] flex flex-col  max-w-sm  p-4 relative h-auto drop-shadow-lg bg-white mx-2">
        <h1>logo</h1>
        <h1>logo</h1>
        <h1>logo</h1>
    </div>      
              </div>
  </>
    )}

    const Componet2 = () => {
      return (
      <>
      <div className=" flex flex-col items-start  justify-start my-8 mx-auto">
        <h1 className="font-bold ">Mixed Include</h1>
        <ul className="pl-8 list-disc">
          <li>Meta Ads</li>
          <li>Google Ads</li>
          <li>TikTok  Ads</li>
          <li>Native  Ads</li>
          <li>iGaming</li>

        </ul>
      </div>
      </>
    )}

     const Componet3 = () => {
      return (
      <>
      <div className=" flex flex-col items-start  justify-start my-8 mx-auto">
        <h1 className="font-bold ">Track Include</h1>
        <ul className="pl-8 list-disc">
          <li>Meta Ads Track</li>
          <li>Google Ads Track</li>
          <li>TikTok  Ads Track</li>
          <li>Native  Ads Track</li>
          <li>iGamin Track</li>
          <li>Plus, Affiliate Marketing's Hottest Topics</li>

        </ul>
      </div>
      </>
        )}
const cardData = [
  { id: 1, text: "Diverse ", text2: "Networking Events", description: 
    "Experience 5+ niche-focused hour-long Mixers and then let the night take over with a variety of networking events and parties that cater to all.r with a variety of networking events and parties that cater to all",
    component:<Componet1/>,
    fcolor:"bg-gradient-to-r from-orange-500/60 to-red-700/60"
   },
  { id: 2, text: "Word Class", text2: "Market Place", description: "Access to 400+ advertisers, traffic sources, and networks on our world-renowned marketplacer with a variety of networking events and parties that cater to all  ." ,
    component:<Componet2/>,
    fcolor:"bg-gradient-to-r from-green-500/60 to-blue-700/60"
  },
  { id: 3, text: "Plus", text2: "Free Niche Tracks", description: "Tracks encompass a series of dynamic events, organized back-to-back by niche enabling you to make deep connections and garner key takeaways for your business."
    ,component:<Componet3/>,
    fcolor:"bg-gradient-to-r from-pink-400/60 to-purple-700/60"
  },
 
];
export function CardPass() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 ">

    <div className="container mx-auto px-4 ">
 <div className="container mx-auto mb-10 text-center lg:mb-20 ">
       
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl text-gray-50 underline decoration-blue-500 decoration-4 underline-offset-4"
        >
         One Pass. Two Game-Changing Days.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-100"
        >
          GET ACCESS TO
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {cardData.map((card) => (
          <div key={card.id} className="border border-black/[0.2] flex flex-col  max-w-sm  p-4 relative h-auto drop-shadow-lg bg-white/95 mx-2 rounded-2xl">
            <EvervaultCard text={card.text} text2={card.text2} fcolor={card.fcolor} className={"h-[30rem]"} />
            {/* <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              {card.description}
            </h2> */}
            <div className="flex flex-col justify-between   h-1/2 my-8">
              <p className="text-justify">
                {card.description}
              </p>
              <div>
                 {card.component}
              </div>
              
            <div className="flex flex-col justify-end items-end">

            <p className="text-sm border text-left font-light border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              know more
            </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

