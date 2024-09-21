import React from 'react'
import Globe from './ui/Globe'
import { FeatureCard } from './ui/featurecard'



 const featureData = [
    {
      category: "advertisers",
      title: "$1M+ per month advertisers",
      description: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
    },
    {
      category: "Technology",
      title: "Fastest-growing traffic sources",
      description: "Artificial Intelligence is revolutionizing how businesses operate, providing insights and automation that were previously unimaginable."
    },
    {
      category: "Innovation",
      title: "54% marketers who generate over $100k per month",
      description: "Recent advancements in renewable energy technologies are paving the way for a more sustainable and environmentally friendly world."
    }, {
      category: "Innovation",
      title: "Fastest-growing Shopify stores $100k per month",
      description: "Recent advancements in renewable energy technologies are paving the way for a more sustainable and environmentally friendly world."
    }
  ];
function Feature() {
  return (
    <div className='   pt-12  '>
       <section className="w-full min-h-screen flex flex-col md:flex-col xl:flex-row justify-center items-center">
     {/* <div className="relative bg-gradient-to-bl from-slate-900/90 via-purple-900/90 to-slate-900/90 flex h-[20rem] w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
     
      <Globe className="top-1 w-screen "/>
     <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" /> 
    </div> 
    */}

    <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726807889/boavmkjqrcuwbpkqkcyw.png" className=' w-[100px] lg:w-auto' alt="" />
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
      <div className='mx-auto px-4'>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-left">Who will you run into</h2>
        <p className="text-base md:text-lg text-gray-600 ">
          Discover how our solutions are making an impact worldwide. Our innovative approach connects businesses
          across continents, leveraging cutting-edge technology to bridge gaps and create opportunities in the global
          marketplace.
        </p>
      </div>
      <section className="grid lg:grid-cols-1 xl:grid-cols-2 gap-5  place-items-center pt-8 sm:mr-12">
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          category={feature.category}
          title={feature.title}
          description={feature.description}
        />
      ))}
      </section>
     
      </div>
    </section>
    </div>
  )
}

export default Feature