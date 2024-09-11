import React, { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";

const Globe = React.memo(() => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initGlobe = useCallback(() => {
    let phi = 0;
    let width = 0;
    let height = 0;
    let globeInstance = null;

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      globeInstance = createGlobe(canvas, {
        devicePixelRatio: 1,
        width: width,
        height: height,
        scale: 1,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [253/255, 223/255, 64/255],
        glowColor: [0.8, 0.8, 0.8],
        markers: [
          { location: [47.4979, 19.0402], size: 0.1 }
        ],
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + pointerInteractionMovement.current / 200;
          state.width = width;
          state.height = height;
        }
      });
      setIsLoading(false);
    }

    return () => {
      if (globeInstance) {
        globeInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const destroyGlobe = initGlobe();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      destroyGlobe();
      initGlobe();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      destroyGlobe();
      window.removeEventListener('resize', handleResize);
    };
  }, [initGlobe]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onPointerDown = (e) => {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current;
      canvas.style.cursor = 'grabbing';
    };
    const onPointerUp = () => {
      pointerInteracting.current = null;
      canvas.style.cursor = 'grab';
    };
    const onPointerOut = () => {
      pointerInteracting.current = null;
      canvas.style.cursor = 'grab';
    };
    const onMouseMove = (e) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
        canvas.style.cursor = 'grabbing';
      }
    };
    const onTouchMove = (e) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta;
      }
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerout', onPointerOut);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerout', onPointerOut);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
   
        
          <canvas
            ref={canvasRef}
            className="absolute top-1/2 left-1/2  transform -translate-x-2/4 -translate-y-1/2"
            style={{ width: '100%', height: '100%', cursor: 'grab' }}
          />
      
     
  );
});

export default Globe;