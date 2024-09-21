import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

const speakers = [
  {
    name: "Dr. Jane Smith",
    role: "AI Ethics Researcher",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    twitter: "https://twitter.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
    website: "https://janesmith.com"
  },
  {
    name: "Prof. John Doe",
    role: "Quantum Computing Specialist",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.com"
  },
  {
    name: "Dr. Emily Brown",
    role: "Neuroscience Innovator",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    twitter: "https://twitter.com/emilybrown",
    linkedin: "https://linkedin.com/in/emilybrown",
    website: "https://emilybrown.com"
  },
  {
    name: "Prof. Michael Lee",
    role: "Climate Change Analyst",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    twitter: "https://twitter.com/michaellee",
    linkedin: "https://linkedin.com/in/michaellee",
    website: "https://michaellee.com"
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Biotechnology Pioneer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    twitter: "https://twitter.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    website: "https://sarahjohnson.com"
  },
  {
    name: "Prof. David Wilson",
    role: "Cybersecurity Guru",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    twitter: "https://twitter.com/davidwilson",
    linkedin: "https://linkedin.com/in/davidwilson",
    website: "https://davidwilson.com"
  }
]

const SpeakersSection = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollSound = new Audio('/scroll-sound.mp3')

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      // Initial check
      handleScroll()
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      scrollSound.play()
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="py-16 bg-gray-50  overflow-hidden bg-grid-small-black/[0.2] relative">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-black py-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Esteemed Speakers at Zep Research
        </motion.h2>
        <motion.p className="text-base md:text-lg text-gray-600 pb-8 text-center mx-auto max-w-7xl" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover how our solutions are making an impact worldwide. Our innovative approach connects businesses
          across continents, leveraging cutting-edge technology to bridge gaps and create opportunities in the global
          marketplace.
        </motion.p>
        <div className="relative">
          <motion.div 
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scrollbar-hide pb-6"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                scroll('right')
              } else if (swipe > swipeConfidenceThreshold) {
                scroll('left')
              }
            }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Invisible card */}
            <div className="flex-shrink-0 w-8 md:w-16 mr-6 invisible"></div>
            
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                className="flex-shrink-0 w-64 md:w-80 mr-6 bg-white pb-2 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.role}</p>
                  <div className="absolute bottom-1 right-4 flex space-x-2 m">
                    <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      <Twitter size={20} />
                    </a>
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                      <Linkedin size={20} />
                    </a>
                    <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button 
            className={`bg-white rounded-full p-2 shadow-lg transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
            onClick={() => canScrollLeft && scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className={`bg-white rounded-full p-2 shadow-lg transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
            onClick={() => canScrollRight && scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection