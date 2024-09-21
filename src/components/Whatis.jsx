import React from "react";
import Globe from "./ui/Globe";

import { useEffect } from "react"
import { motion } from 'framer-motion'
import { BookOpen, Users, Calendar, Award } from 'lucide-react'
const cards = [
  {
    title: 'Publications',
    description: 'Cutting-edge research and industry insights published regularly.',
    icon: BookOpen,
  },
  {
    title: 'Conferences',
    description: 'Global events bringing together thought leaders and innovators.',
    icon: Users,
  },
  {
    title: 'Workshops',
    description: 'Hands-on sessions for skill development and knowledge sharing.',
    icon: Calendar,
  },
  {
    title: 'Awards',
    description: 'Recognizing excellence in research and industry contributions.',
    icon: Award,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export function Whatis() {
  useEffect(() => {
    // This is to ensure Framer Motion's animations work correctly with SSR
    const body = document.querySelector('body')
    if (body) {
      body.style.overflow = 'auto'
    }
  }, [])
  return (
 <>
 <div className="container mx-auto max-w-screen-2xl px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side component */}
       <Globe/>

        {/* Right side content */}
        <div className="space-y-8 px-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black py-4">What is Zep Research?</h1>
            <p className="text-base md:text-lg text-gray-600 pb-8 text-justify " >
              Zep Research has grown to become what Neil Patel considers “the only absolutely must-attend event in the industry.”
               You will network with the industry’s brightest minds, absorb mastermind-level content on stage, and be exposed to 
               an exhibition hall overflowing with opportunities to push your career forward. Experts will take the stage and present
                new insights, data-driven strategies, and innovative ideas on affiliate and ecommerce marketing. After soaking up the
                 knowledge, look out for some extra perks at the end of each day: happy hours, rooftop sunsets, and an irresistible industry nightlife.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-5">
                <card.icon className="w-6 h-6 text-[#3B3BFF] mb-4" />
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </div>
 </>
  );
}

<style jsx global>{`
.control-buttons button {
  background: rgba(155, 155, 155, 0.2);
  border-radius: 9px;
  padding: 0.2rem .5rem;
  cursor: pointer;
}
`}</style>