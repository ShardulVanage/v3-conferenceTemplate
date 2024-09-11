import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './components/Home'
import Globe from './components/ui/Globe'
import Feature from './components/Feature'
import Explain2 from './components/Explain2'
import Stats from './components/Stats'
import { Topic } from './components/Topic'
import { Speaker } from './components/Speaker'
import { CardPass } from './components/CardPass'
import { VideFeedBck } from './components/videFeedBck'
import { Whatis } from './components/Whatis'
import Gallery from './components/Gallery'
import Princing from './components/Pricing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Feature/>
    <Stats/>
    <Topic/>
    <VideFeedBck/>
    <Whatis/>
    <Speaker/>
    <CardPass/>
    <Gallery/>
    <Princing/>
    
    <Explain2/>
    </>
  )
}

export default App
