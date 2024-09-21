"use client"

import { motion } from "framer-motion"
import BackgroundBeamsWithCollision from "./ui/background-beams-with-collision"
import { cn } from "../lib/utlis"

const stats = [
  { percentage: "43+", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor" ,title:"Conference"},
  { percentage: "79+", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor" ,title:"Publication"},
  { percentage: "16+", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor" ,title:"Journal Tie-ups"},
]

export default function Component() {
  
  return (
  <BackgroundBeamsWithCollision className={cn("h-full")}>
  <div className=" py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h2
                className="text-5xl font-bold mb-4"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {stat.percentage}
              </motion.h2>
              <p className="text-gray-600 mb-4">{stat.description}</p>
              <motion.div
                href="#"
                className="text-black font-medium inline-block relative cursor-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {stat.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">Looking for growth?</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, amet, neque vestibulum elit mi vitae lacus.
            </p>
            <motion.a
            
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                Contact Us
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
    </BackgroundBeamsWithCollision>
  )
}