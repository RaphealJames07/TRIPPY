import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the location (route) changes
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ToTop;
