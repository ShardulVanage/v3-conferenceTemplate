import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { desc } from "framer-motion/client";

export default function Globe() {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    { name: "San Francisco", coordinates: [37.7749, -122.4194] ,
      description: "San Francisco is a city in the U.S. state of California. It is the capital and most populous city of the state,",
    },
    { name: "Berlin", coordinates: [52.5200, 13.4050] ,
      description: "Berlin is the capital and most populous city of Germany. It is located in the northeastern part of the country, on the Baltic Sea.",
    },
    { name: "Tokyo", coordinates: [35.6762, 139.6503] ,
      description: "Tokyo is the capital and most populous city of Japan. It is located in the northwestern part of the country, on the Pacific Ocean.",
    },
    { name: "Buenos Aires", coordinates: [-34.6037, -58.3816],
      description: "Buenos Aires is the capital and most populous city of Argentina. It is located in the southwestern part of the country, on the Atlantic Ocean.",
     },
  ];

  const locationToAngles = (lat, long) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
  };

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      scale: 0.8,
      phi: 0,
      theta: 0.3,
      dark: 0.9,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0.3, 0.3, 7],// Blue color
      glowColor: [1.2, 1.2, 1.2],
      markers: locations.map(loc => ({ location: loc.coordinates, size: 0.1 })),
      onRender: (state) => {
        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = activeLocation 
          ? locationToAngles(...activeLocation.coordinates)
          : [currentPhi, currentTheta];
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;
        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    setTimeout(() => canvasRef.current.style.opacity = '1');

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [activeLocation]);

  return (
    <div className="relative  w-full max-w-[600px] mx-auto py-0 ">
      <div className="aspect-square">
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-0 transition-opacity duration-1000 ease-in cursor-grab active:cursor-grabbing"
          style={{ contain: 'layout paint size' }}
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = 'grabbing';
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              canvasRef.current.style.cursor = 'grabbing';
            }
          }}
        />
      </div>
      {activeLocation && (
        <div className="absolute bg-opacity-20 top-24 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4 p-1  shadow-lg rounded-lg  bg-gradient-to-br from-blue-400 to-purple-500">
          <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
            <h2 className="text-lg font-bold mb-2">{activeLocation.name}</h2>
          <p className="text-sm">{activeLocation.description}</p>
         
          </div>
        </div>
      )}

      <div className="-mt-12 z-20 relative ">
        <h1 className="text-2xl font-bold text-center">checkout our upcoming conferences</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-4 gap-2 ">
        {locations.map((location) => (
          <button
            key={location.name}
            onClick={() => setActiveLocation(location)}
            className="px-4 py-2 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            {location.name}
          </button>
        ))}
      </div>
      <div>
        <p className="text-base  text-justify pt-4 text max-w-md mx-auto ">Some Text, innovative ideas on affiliate and ecommerce marketing. After soaking up the knowledge, look out for some extra perks at the end of each day: happy hours, rooftop sunsets, and an irresistible industry nightlife.</p>
      </div>
    </div>
  );
}