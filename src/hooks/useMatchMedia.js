import {useEffect, useState} from 'react';

const useMatchMedia = (query) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia(`(max-width: ${query}px)`).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${query}px)`);
    const handleWidth = (e) => {
      const matches = e.matches
      setIsMobile(matches);
    };

    mediaQueryList.addEventListener('change', handleWidth);

    return () => {
      mediaQueryList.removeEventListener('change', handleWidth);
    };
  });

  return isMobile;
};

export default useMatchMedia;
