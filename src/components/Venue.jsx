'use client'

import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { IconGlobe, IconWorld } from '@tabler/icons-react';
import { motion } from 'framer-motion'
import BackgroundBeamsWithCollision from './ui/background-beams-with-collision';

const amenities = [
  { id: 1, text: 'Spacious conference halls' },
  { id: 2, text: 'Cutting-edge AV equipment' },
  { id: 3, text: 'Gourmet catering services' },
];

export default function Venue() {
  return (
    <section className="py-16 bg-gray-100 bg-grid-black/[0.2] relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Venue
        </motion.h2>
        <motion.div 
          className="bg-white sm:rounded-l-full rounded-r-3xl  shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <motion.div 
                className="h-64 md:h-full relative"
                
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507622560124-621e26755fb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Budapest Conference Venue"
                  layout="fill"
                  objectFit="cover"
                  className="sm:rounded-tl-2xl md:rounded-l-full md:rounded-t-none"
                />
              </motion.div>
            </div>
            <div className="md:w-1/2 p-8 rounded-r-3xl">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Budapest Convention Center
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Located in the heart of Budapest, our state-of-the-art convention center offers a perfect blend of modern amenities and historic charm. With stunning views of the Danube River, it's the ideal setting for our conference.
              </motion.p>
               <motion.ul 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {amenities.map((amenity) => (
                  <li key={amenity.id} className="flex items-center mb-2">
                    <svg 
                      className="w-5 h-5 mr-2 text-purple-600" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {amenity.text}
                  </li>
                ))}
              </motion.ul>
               <motion.a
            
              className="relative drop-shadow-lg mt-8 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-400 to-purple-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative inline-flex px-12 py-2.5 transition-all ease-in duration-75 bg-white rounded-md w-full">
                Map <GlobeAsiaAustraliaIcon className='w-5 h-5 ml-2'/>
              </span>
            </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
  
    </section>
  )
}