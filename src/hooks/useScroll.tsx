import { useState, useEffect } from 'react';

const useScroll = (): number => {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    setPosition(window.scrollY);
    console.log("You just got gnomed")
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};

export default useScroll;
