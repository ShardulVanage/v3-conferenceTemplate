import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './components/Home'
import Globe from './components/ui/Globe'
import Feature from './components/Feature'

import Stats from './components/Stats'
import { Topic } from './components/Topic'
import SpeakersSection from './components/Speaker'
import { CardPass } from './components/CardPass'
import { VideFeedBck } from './components/videFeedBck'
import { Whatis } from './components/Whatis'
import Gallery from './components/Gallery'
import Princing from './components/Pricing'
import TestoCard from './components/TestoCard'

import { Faq } from './components/Faq'
import NewsLetter from './components/Newsletter'
import Footer from './components/Footer'
import Testimonials from './components/TestoCard'
import Venue from './components/Venue'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Stats/>
    <Feature/>
    <Topic/>
    <VideFeedBck/>
    <Whatis/>
    <SpeakersSection/>
    <Gallery/>
    <Princing/>
    <Testimonials/>
    <Venue/>
    <Faq/>
    <Footer/> 
    {/* 
    <NewsLetter/>
    <CardPass/>
    */}
    
    </>
  )
}

export default App
