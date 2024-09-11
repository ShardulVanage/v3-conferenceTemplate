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
    <div className=' bg-gradient-to-t from-black to-gray-900  pt-12  '>
       <section className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <Globe/>
         </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who will you run into</h2>
        <p className="text-base md:text-lg text-gray-100">
          Discover how our solutions are making an impact worldwide. Our innovative approach connects businesses
          across continents, leveraging cutting-edge technology to bridge gaps and create opportunities in the global
          marketplace.
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5  place-items-center pt-8 sm:mr-12">
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