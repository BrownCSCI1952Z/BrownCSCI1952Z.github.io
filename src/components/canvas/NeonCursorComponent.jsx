import React, { useEffect, useRef, useState } from 'react';
import { styles } from "../../styles";
import neonCursor from './neons';
const NeonCursorComponent = () => {
  const appRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadScript = async () => {
      try {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
        script.type = 'module';
        script.onload = () => setIsLoaded(true);
        document.body.appendChild(script);
      } catch (error) {
        console.error('Failed to load the script:', error);
      }
    };

    loadScript();
  }, []);

  useEffect(() => {
    const initializeNeonCursor = async () => {
      if (isLoaded && appRef.current) {
        try {
          // Import neonCursor after script is loaded
          // const { neonCursor } = await import('https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js');
          neonCursor({
            el: appRef.current,
            shaderPoints: 32,
            curvePoints: 100,
            curveLerp: 0.4,
            radius1: 10,
            radius2: 60,
            velocityTreshold: 10,
            sleepRadiusX: 100,
            sleepRadiusY: 100,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025
          });
        } catch (error) {
          console.error('Failed to initialize neonCursor:', error);
        }
      }
    };

    initializeNeonCursor();
  }, [isLoaded]);

  return (
    <div ref={appRef} className="h-screen w-full mx-auto">
      <div id="hero">
        <div
          className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Welcome to <br />
              <span className='text-[#915EFF]'>Robots as a Medium</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeonCursorComponent;
