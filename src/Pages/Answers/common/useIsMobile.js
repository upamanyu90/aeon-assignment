import { useState, useEffect } from 'react';

// Custom hook to detect if the device is mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on the window width
    function handleResize() {
      setIsMobile(window.innerWidth < 800); // You can adjust the breakpoint as needed
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the function initially to set the initial state
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
