import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Conference exhibition hall"
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Keynote panel on stage"
  },
  {
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    alt: "Budapest cityscape"
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    alt: "Conference attendees networking"
  },
  
  {
    src: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Conference social event"
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
    alt: "Conference workshop"
  },
 
]

const quotes = [
  {
    text: "Zep Research has everything - great content, great networking, new vendors that you can meet in a great city. I just can't think of a better way to spend a couple of days.",
    author: "Ryan Deiss",
    role: "Founder, DigitalMarketer"
  },
  {
    text: "You're getting the top 10% of people that are in this industry and putting them all in one room.",
    author: "Paul Jeyapal",
    role: "Co-Founder & CEO, Synapse Media"
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [...images, ...quotes].sort(() => Math.random() - 0.5)

  return (
    <div className="min-h-full bg-white py-12 ">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Conference Highlights</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            'src' in item ? (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center p-4">{item.alt}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                className="bg-gray-100 drop-shadow-md p-6 rounded-lg shadow-md flex flex-col justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-lg mb-4">"{item.text}"</p>
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-gray-400">{item.role}</p>
              </motion.div>
            )
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </div>
  )
}