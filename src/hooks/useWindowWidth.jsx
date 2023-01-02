import { useEffect, useCallback, useState } from 'react';

export default function useWindowWidth() {
  const getWindowWidth = useCallback(() => window.innerWidth, []);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {

    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', resizeController, false);

    let resizeTimer;

    function resizeController() {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleWindowResize();
        }, 1000);
      }
    };

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [getWindowWidth]);

  return windowWidth;
}